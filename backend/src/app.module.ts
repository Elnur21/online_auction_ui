import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';
import { AuctionController } from './auction/auction.controller';
import { AuctionModule } from './auction/auction.module';

@Module({
  imports: [UserModule, BlogModule, ContactModule, AuctionModule],
  controllers: [AppController, AuctionController],
  providers: [AppService, ContactService],
})
export class AppModule {}
