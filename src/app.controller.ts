import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { SkipAuth } from './auth/metadata/SkipAuth';
import { UsersService } from './models/users/users.service';

@Controller()
export class AppController {

}