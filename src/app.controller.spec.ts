import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, UserService, PostService, PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('user', () => {
    it('should be able to create a user', async () => {
      const user = await appController.signupUser({
        email: 'teste@gmail.com',
        name: 'Teste',
      });
      expect(user).toHaveProperty('id');
    });
  });
});
