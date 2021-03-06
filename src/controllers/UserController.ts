import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

interface CreateRequest {
  name: string;
  email: string;
}

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body as CreateRequest;
    const usersRepository = getCustomRepository(UsersRepository);
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });
    if (userAlreadyExists) {
      return response.status(400).json({
        error: 'User already exists',
      });
    }
    const user = usersRepository.create({
      name,
      email,
    });
    await usersRepository.save(user);
    return response.status(201).json(user);
  }
}

export default UserController;
