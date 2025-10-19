import { INestApplication, Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // ✅ Prisma 5+: dùng process events, không dùng this.$on('beforeExit')
  enableShutdownHooks(app: INestApplication) {
    const shutdown = async () => {
      try { await app.close(); } finally { process.exit(0); }
    };
    process.once('SIGINT', shutdown);
    process.once('SIGTERM', shutdown);
    process.once('beforeExit', async () => { await app.close(); });
  }
}
