import { DomainEntity } from 'domain-objects';

/**
 * membership of an agent within a crew
 */
export interface OrganizationCrewMembership {
  uuid: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  /**
   * the crew the membership is to
   */
  crewUuid: string;

  /**
   * the agent the membership is for
   */
  agentUuid: string;
}
export class OrganizationAgentRole
  extends DomainEntity<OrganizationAgentRole>
  implements OrganizationAgentRole {}
