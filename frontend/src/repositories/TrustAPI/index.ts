import { Owner, Tenant, ITrustAPI, ProfileFormValues } from "./types";
import { ofetch } from "ofetch";
export * from './types'

export default function TrustAPI (): ITrustAPI {
  const theGraphInstance = ofetch.create({
    baseURL: 'https://api.thegraph.com/subgraphs/name/quent043/trustgoerli'
  })
  const backendInstance = ofetch.create({
    baseURL: ''
  })


  return {
    getOwnerScore(id: string): Promise<number> {
      return Promise.resolve(0);
    },
    getTenantLeases(id: string): Promise<[]> {
      return Promise.resolve([]);
    },
    getTenantScore(id: string): Promise<number> {
      return Promise.resolve(0);
    },
    getProfile: async (address) => {
      const body = {
        query: `{
          owners(where: {address: "${address}"}) {
            id handle address uri
          }
          tenants(where: {address: "${address}"}) {
            id handle address uri hasLease
          }}`
      }
      const { data: { tenants, owners } } = await theGraphInstance<{ data: { owners: Owner[], tenants: Tenant[] } }>(
        '/', { method: 'POST', body }
      )
      if (!tenants.length && !owners.length) { throw new Error('profile.not-found') }
      return {
        tenant: tenants[0],
        owner: owners[0]
      }
    },
    createProfile: async (values: ProfileFormValues) => {
      const profile = await backendInstance("/profile/create", {
        method: "POST",
      }); //toBeChecked
      if (profile.status === "rejected") {
        throw new Error("profile.not-created");
      }
      const [id, address, createdAt, updatedAt, name, handle] = profile.value;
      return {
        id,
        address,
        createdAt,
        updatedAt,
        name,
        handle,
      };
    }
  }
}
