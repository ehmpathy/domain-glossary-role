import { DomainEntity } from 'domain-objects';

/**
 * a role which an organization can assign to agents
 */
export interface OrganizationAgentRole {
  uuid: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  /**
   * the organization which manages this role
   *
   * note
   * - may be null if the role is globally managed (e.g., managed by the platform instead of any organizations)
   * - the name of this key can be customized by passing in a generic argument to OrganizationAgentRole
   *     - e.g., `OrganizationAgentRole<'providerUuid'>` would change the name of this key to `providerUuid`
   *
   * todo: enable this key name to be customized by the implementer once https://stackoverflow.com/a/69635878/3068233 has a solution (e.g., provider uuid, auction house uuid, etc);
   */
  organizationUuid: string | null;

  /**
   * the unique identifier for this role
   *
   * todo: enable this key name to be customized by the implementer once https://stackoverflow.com/a/69635878/3068233 has a solution (e.g., doer uuid, user uuid, etc);
   */
  externalId: string;

  /**
   * a human readable name for the role
   */
  name: string;

  /**
   * a description of the role
   */
  description: string;

  /**
   * the permissions granted by this role
   */
  permissions: { action: string }[]; // todo: leverage domain-glossary-permission.Permission dobj
}
export class OrganizationAgentRole
  extends DomainEntity<OrganizationAgentRole>
  implements OrganizationAgentRole {}
