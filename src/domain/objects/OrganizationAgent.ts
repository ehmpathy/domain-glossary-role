import { DomainEntity } from 'domain-objects';

/**
 * an agent authorized to act on behalf of an organization under a given role
 */
export interface OrganizationAgent {
  uuid: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  /**
   * the organization that this agent was granted authority to represent
   *
   * todo: enable this key name to be customized by the implementer once https://stackoverflow.com/a/69635878/3068233 has a solution (e.g., provider uuid, auction house uuid, etc);
   */
  organizationUuid: string;

  /**
   * the unique identifier of the agent who was received this authority
   *
   * todo: enable this key name to be customized by the implementer once https://stackoverflow.com/a/69635878/3068233 has a solution (e.g., doer uuid, user uuid, etc);
   */
  externalId: string;

  /**
   * the role this agent was granted
   */
  roleUuid: string;
}
export class OrganizationAgent
  extends DomainEntity<OrganizationAgent>
  implements OrganizationAgent {}
