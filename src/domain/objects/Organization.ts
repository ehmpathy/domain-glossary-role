import { DomainEntity } from 'domain-objects';

/**
 * an organization which uses agents to fulfill actions
 */
export interface Organization {
  uuid: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  /**
   * the unique identifier for the organization
   */
  externalId: string;

  /**
   * the human readable name for the organization
   */
  name: string;
}
export class Organization
  extends DomainEntity<Organization>
  implements Organization {}
