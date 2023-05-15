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
        let ret = await this.usersService.createUser(req);
        return CommonResponse.create(ret);
    }

    // @UseGuards(AuthGuard('local'))
    @UseGuards(LocalAuthGuard)
    // @SkipAuth()
    @Post('/login')
    async login(@Body() req: AddUser) {
        return this.authService.login(req);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/info')
    getProfile(@Request() req) {
      return 'user';
    }
}