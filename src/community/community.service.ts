import { Injectable } from '@nestjs/common';
import { CommunityRepository } from './community.repository';
import { Community } from './community.entity';
import { CommunityCreateDTO } from './dtos/community-create.dto';
import { CommunityUpdateDTO } from './dtos/community-update.dto';
import { FullCommunityCreateDTO } from './dtos/full-community-create.dto';
import { GeographyRepository } from '../geography/geography.repository';
import { PopulationRepository } from '../population/population.repository';
import { EconomyRepository } from '../economy/economy.repository';
import { InfrastructureRepository } from '../infrastructure/infrastructure.repository';
import { AgricultureRepository } from '../argiculture/agriculture.repository';
import { EducationRepository } from '../education/education.repository';
import { ReligionRepository } from '../religion/religion.repository';
import { SportRepository } from '../sport/sport.repository';
import { TransportRepository } from '../transport/transport.repository';
import { PlaceRepository } from 'src/place/place.repository';

@Injectable()
export class CommunityService {
  constructor(
    private readonly communityRepo: CommunityRepository,

    private readonly geographyRepo: GeographyRepository,

    private readonly populationRepo: PopulationRepository,

    private readonly economyRepo: EconomyRepository,

    private readonly infrastructureRepo: InfrastructureRepository,

    private readonly agricultureRepo: AgricultureRepository,

    private readonly educationRepo: EducationRepository,

    private readonly religionRepo: ReligionRepository,

    private readonly sportRepo: SportRepository,

    private readonly transportRepo: TransportRepository,

    private readonly placeRepo: PlaceRepository,
  ) {}

  findAll(): Promise<Community[]> {
    return this.communityRepo.findAll();
  }

  async getNames(): Promise<{ id: number; name: string }[]> {
    const communities = await this.communityRepo.find();
    return communities.map(({ id, name }) => ({ id, name }));
  }

  findById(id: number): Promise<Community> {
    return this.communityRepo.findById(id);
  }

  create(dto: CommunityCreateDTO): Promise<Community> {
    return this.communityRepo.createCommunity(dto);
  }

  async createFullCommunity(dto: FullCommunityCreateDTO): Promise<Community> {
    const newCommunity: CommunityCreateDTO = {
      name: dto.name,
      edrpou_code: dto.edrpou_code,
      region: dto.region,
      district: dto.district,
      center_settlement: dto.center_settlement,
      postal_index: dto.postal_index,
      email: dto.email,
      phone: dto.phone,
      website: dto.website,
      photos: dto.photos,
      history: dto.history,
      settlements: dto.settlements,
      population_amount: dto.population_amount,
      established: dto.established,
      area_km2: dto.area_km2,
      center: dto.center,
      keyPlaces: [],
      coordinates: dto.coordinates,
      geography_description: dto.geography_description,
    };

    const savedCommunity =
      await this.communityRepo.createCommunity(newCommunity);

    if (dto.keyPlaces) {
      for (const placeDto of dto.keyPlaces) {
        const place = await this.placeRepo.create({
          ...placeDto,
          community_id: savedCommunity.id,
        });
        await this.placeRepo.save(place);
      }
    }

    if (dto.population) {
      const population = await this.populationRepo.createPopulation({
        ...dto.population,
        communityId: savedCommunity.id,
      });
      population.community = savedCommunity;
      await this.populationRepo.savePopulation(population);
    }

    if (dto.economy) {
      const economy = await this.economyRepo.createEconomy({
        ...dto.economy,
      });
      economy.community = savedCommunity;
      await this.economyRepo.saveEconomy(economy);
    }

    if (dto.infrastructure) {
      const infrastructure = await this.infrastructureRepo.createInfrastucture({
        ...dto.infrastructure,
      });
      infrastructure.community = savedCommunity;
      await this.infrastructureRepo.saveInfrastructure(infrastructure);
    }

    if (dto.argiculture) {
      const agriculture = await this.agricultureRepo.createAgriculture({
        ...dto.argiculture,
        communityId: savedCommunity.id,
      });
      agriculture.community = savedCommunity;
      await this.agricultureRepo.saveArgiculture(agriculture);
    }

    if (dto.education) {
      const education = await this.educationRepo.createEducationPlace({
        ...dto.education,
      });
      education.community = savedCommunity;
      await this.educationRepo.saveEducationPlace(education);
    }

    if (dto.religion) {
      const religion = await this.religionRepo.create({
        ...dto.religion,
        community: savedCommunity,
      });
      await this.religionRepo.save(religion);
    }

    if (dto.sport) {
      const sport = await this.sportRepo.create({
        ...dto.sport,
        community: savedCommunity,
      });
      await this.sportRepo.save(sport);
    }

    if (dto.transport) {
      const transport = await this.transportRepo.create({
        ...dto.transport,
        community: savedCommunity,
      });
      await this.transportRepo.save(transport);
    }

    return this.communityRepo.findById(savedCommunity.id);
  }

  update(id: number, dto: CommunityUpdateDTO): Promise<Community> {
    return this.communityRepo.updateCommunity(id, dto);
  }

  delete(id: number): Promise<void> {
    return this.communityRepo.deleteCommunity(id);
  }
}
