import { Controller, Session, Req, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AuthService } from '../auth/auth.service';
import { AuthUserDto } from './dtos/auth-user.dto';
import { FastifyRequest } from 'fastify-secure-session';

@Serialize(UserDto)
@Controller('user')
export class UserController {
    constructor(private userService: UserService, private authService: AuthService){}

    /**
     * Creates a new user from user management
     * @param body 
     * @returns authenticated user
     */
    @Post()
    async create(@Body() newUser: CreateUserDto) {
        return await this.userService.create(newUser)
    }

    /**
     * Authenticate users
     * @param body 
     * @returns authenticated user
     */
    @Post('/authenticate')
    async authenticate(@Body() body: AuthUserDto, @Req() request: FastifyRequest) {

        console.log(request.session)

        if(request.session.userId)
            return this.userService.findOne(request.session.userId)
        
            console.log('authenticating')
        const user = await this.authService.authenticate(body.email, body.password);
        if(!user)
            return null;
        request.session.set('user', user.id)

            // session.userId = user.id
            // session.save((err) => {
            //     console.log("err = ", err)
            //     return err ? err : 'User login successful '+user.email
            // })
    }

    @Get('/session')
    isAuthenticated(@Session() session) {
        console.log(session.userId);
        return session.userId !== undefined;
    }
    /**
     * Logs a user out of the session
     * @param session 
     */
    @Post('/logout')
    signOut(@Session() session: any) {
        session.userId = null;
    }

    /**
     * Returns the currently signed-in user
     * @param session 
     * @returns current user
     */
    @Get('/currentUser')
    getCurrentUser(@Req() request: FastifyRequest) {
        const user = request.session.get('user')
        if(!user)
            return null

        return this.userService.findOne(request.session.get('user'))
    }

    /**
     * Return list of all users
     * @returns Users
     */
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }

    
    /**
     * Get the user by id
     * @param id: User id
     * @returns User
     */
    @Get('/id/:id')
    getUserById(@Param('id') id: number){
        return this.userService.findOne(id);
    }

    /**
     * Get the user by email address
     * @param email User email address
     * @returns User
     */
    @Get('/email/:email')
    getUserByEmail(@Param('email') email: string){
        return this.userService.findByEmail(email);
    }

    /**
     * Deletes a user
     * @param id User id
     * @returns DeleteResult
     */
    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id));
    }

    /**
     * Updates attributes for an existing user
     * @param id User id
     * @param body
     */
    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
        this.userService.update(parseInt(id), body);
    }

}
