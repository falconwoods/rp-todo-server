import { Body, Controller, Get, Res, Post, Request, UseGuards, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
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
    async signup(@Body() req: any) {
        let user = await this.usersService.findByName(req.username);
        if(user != null)
            return CommonResponse.createRaw(null, 'username is already existed');
        return await this.usersService.createUser(req);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/signin')
    async login(@Body() req: AddUser, @Res() res: Response) {
        let user = await this.usersService.findByName(req.username);
        let token = this.authService.login(user);

        res.cookie('jwtToken', token, {
            httpOnly: true,
            secure: true, //process.env.NODE_ENV === 'production', // Set 'secure' to true in production
            sameSite: 'none',
        });

        return res.send(CommonResponse.createRaw("success", null));
    }

    @UseGuards(JwtAuthGuard)
    @Get('/logout')
    getProfile(@Request() req, @Res() res: Response) {
        res.cookie('jwtToken', '', {
            httpOnly: true,
            secure: true, //process.env.NODE_ENV === 'production', // Set 'secure' to true in production
            sameSite: 'none',
        });
        return res.send(CommonResponse.createRaw("success", null));
    }
}