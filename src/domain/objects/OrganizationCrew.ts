import { DomainEntity } from 'domain-objects';

/**
 * a group of agents who work closely together
 */
export interface OrganizationCrew {
  uuid: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  /**
   * a unique identifier for the crew
   */
  externalId: string;

  /**
   * a human readable name for the crew
   */
  name: string;

  /**
   * a description of the crew
   */
  description: string;
}
export class OrganizationAgentRole
  extends DomainEntity<OrganizationAgentRole>
  implements OrganizationAgentRole {}
