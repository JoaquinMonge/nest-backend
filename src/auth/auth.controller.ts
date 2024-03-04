import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';


import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.authService.create(createUserDto);
    }

    @Get()
    findAll(@Request() req: Request) {

        return this.authService.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
        return this.authService.update(+id, updateAuthDto)
    }

}


