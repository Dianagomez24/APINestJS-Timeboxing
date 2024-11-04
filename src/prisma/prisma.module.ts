import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Esto asegura que otros módulos puedan usar PrismaService
})
export class PrismaModule {}
