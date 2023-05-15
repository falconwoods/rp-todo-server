import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AddUser } from './dto/add-user';
import { SkipAuth } from 'src/auth/metadata/SkipAuth';
import { CommonResponse } from 'src/common/response/CommonResponse';
import { LocalAuthGuard } from 'src/auth/guard/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
        private authService: AuthService
    ) { }

    @SkipAuth()
    @Post('/signup')
    async signup(@Body() req: AddUser) {
        return await this.usersService.createUser(req);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Body() req: AddUser) {
        let user = await this.usersService.findByName(req.username);
        let token = this.authService.login(user);
        return CommonResponse.createRaw(token, null);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/info')
    getProfile(@Request() req) {
      return 'user';
    }
}