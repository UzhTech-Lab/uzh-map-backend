import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { CommunityRepository } from 'src/community/community.repository';
import { FullCommunityCreateDTO } from 'src/community/dtos/full-community-create.dto';

interface SeedFile {
  communities: FullCommunityCreateDTO[];
}

@Injectable()
export class SeedService {
  constructor(private readonly communityRepo: CommunityRepository) {}

  async run(): Promise<void> {
    const raw = await fs.readFile('seed/data.json', 'utf-8');

    const data: SeedFile = JSON.parse(raw);

    for (const community of data.communities) {
      await this.communityRepo.createCommunity(community);
    }
  }
}
