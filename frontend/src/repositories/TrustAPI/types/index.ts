import { CreateUserBody } from "../../../../../shared/types/UserAPI";

export interface Person {
  id: number
  handle: string // name
  address: string
}

export type Account = {
  address: string;
  isConnected: boolean | undefined;
  isReconnecting: boolean | undefined;
  isConnecting: boolean | undefined;
  isDisconnected: boolean | undefined;
  status:
    | "connected"
    | "reconnecting"
    | "connecting"
    | "disconnected"
    | undefined;
};

export interface Tenant extends Person {
  hasLease: boolean
}
export interface Owner extends Person {}

export interface Profile {
  tenant?: Tenant
  owner?: Owner
}

enum LeaseStatus {
  ACTIVE,
  PENDING,
  ENDED,
  CANCELLED,
}

enum PaymentStatus {
  PENDING,
  PAID,
  NOT_PAID,
  CANCELLED,
  CONFLICT
}

export interface RentPayment {}

export interface Lease {
  id: string // 1-0
  startDate: string // ms since unix new Date()
  status: LeaseStatus
  updatedAt: string
  createdAt: string
  rentPayments: Array<RentPayment>
}

export interface ITrustAPI {
  getProfile: (address: string) => Promise<Profile>;
  createProfile: (body: CreateUserBody) => Promise<Person>;
  getTenantScore: (id: string) => Promise<number>;
  getOwnerScore: (id: string) => Promise<number>;
  getTenantLeases: (id: string) => Promise<Lease[]>;
}

export type OracleData = {
  rate: string;
  date: string;
}
