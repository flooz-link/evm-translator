/* eslint-disable @typescript-eslint/no-unused-vars */
import { ContractData, Decoded, Interpretation } from 'interfaces'
import { ABI_ItemUnfiltered, ABI_Row } from 'interfaces/abi'

export abstract class DatabaseInterface {
    // abstract getContractDataForContract(contractAddress: string): Promise<ContractData | null>
    abstract getContractDataForManyContracts(contractAddresses: string[]): Promise<Record<string, ContractData | null>>

    // abstract addOrUpdateContractData(contractData: ContractData): Promise<void>
    abstract addOrUpdateManyContractData(contractDataArr: ContractData[]): Promise<void>
    /** Contracts often don't have their full ABI shared, but we can infer it using a signature table when we see a contract using that ABI */
    // abstract AppendABIsToContractData(contractAddress: string, abi: ABI_ItemUnfiltered[]): Promise<void>

    // abstract addOrUpdateABI(abiArr: ABI_Row): Promise<void>
    abstract addOrUpdateManyABI(abiArr: ABI_Row[]): Promise<void>

    /** Returns an array b/c there might be more than one full signature per hex signature. hex<-->hashable is 1:1*/
    abstract getABIsForHexSignature(hexSignature: string): Promise<ABI_ItemUnfiltered[] | null>
    abstract getFirstABIForHexSignature(hexSignature: string): Promise<ABI_ItemUnfiltered | null>

    // abstract getABIRowsForHexSignature(hexSignature: string): Promise<ABI_Row[] | null>
    // abstract getFirstABIRowForHexSignature(hexSignature: string): Promise<ABI_Row | null>
    // abstract addABIsForHexSignature(abiArr: ABI_Row[]): Promise<void>
    // abstract addABIForHexSignature(abi: ABI_Row): Promise<void>

    // abstract getDecodedData(txHash: string): Promise<Decoded | null>
    // abstract getManyDecodedData(txHashes: string[]): Promise<Array<Decoded> | null>

    // abstract addOrUpdateDecodedData(decodedData: Decoded): Promise<void>
    // abstract addOrUpdateManyDecodedData(decodedDataArr: Decoded[]): Promise<void>

    // abstract addOrUpdateInterpretedData(interpretedData: Interpretation): Promise<void>
    // abstract addOrUpdateManyInterpretedData(interpretedDataArr: Interpretation[]): Promise<void>

    // abstract getInterpretedData(txHash: string, userAddress: string | null): Promise<Interpretation | null>
    // abstract getManyInterpretedData(
    //     txHashes: string[],
    //     userAddress: string | null,
    // ): Promise<Array<Interpretation | null> | null>
    // abstract getAllInterpretationsForTxHash(txHash: string): Promise<Interpretation[] | null>
    // abstract getAllInterpretationsForAddress(address: string): Promise<Interpretation[] | null>
}

export class NullDatabaseInterface extends DatabaseInterface {
    // skip for now
    async getContractDataForContract(contractAddress: string): Promise<ContractData | null> {
        return Promise.resolve(null)
    }

    // implemented
    async getContractDataForManyContracts(contractAddresses: string[]): Promise<Record<string, ContractData | null>> {
        const obj: Record<string, ContractData | null> = {}
        for (let i = 0; i < contractAddresses.length; i++) {
            obj[contractAddresses[i]] = null
        }
        return Promise.resolve(obj)
    }

    // skip for now
    async addOrUpdateContractData(contractData: ContractData): Promise<void> {
        return Promise.resolve()
    }

    // implemented
    async addOrUpdateManyContractData(contractDataArr: ContractData[]): Promise<void> {
        return Promise.resolve()
    }
    /** Contracts often don't have their full ABI shared, but we can infer it using a signature table when we see a contract using that ABI */
    async AppendABIsToContractData(contractAddress: string, abi: ABI_ItemUnfiltered[]): Promise<void> {
        return Promise.resolve()
    }

    // skip for now
    async addOrUpdateABI(abiArr: ABI_Row): Promise<void> {
        return Promise.resolve()
    }

    // implemented
    async addOrUpdateManyABI(abiArr: ABI_Row[]): Promise<void> {
        return Promise.resolve()
    }
    /** Returns an array b/c there might be more than one full signature per hex signature. hex<-->hashable is 1:1*/
    // implemented
    async getABIsForHexSignature(hexSignature: string): Promise<ABI_ItemUnfiltered[] | null> {
        return Promise.resolve(null)
    }

    async getFirstABIForHexSignature(hexSignature: string): Promise<ABI_ItemUnfiltered | null> {
        return Promise.resolve(null)
    }

    async getABIRowsForHexSignature(hexSignature: string): Promise<ABI_Row[] | null> {
        return Promise.resolve(null)
    }

    async getFirstABIRowForHexSignature(hexSignature: string): Promise<ABI_Row | null> {
        return Promise.resolve(null)
    }

    async getDecodedData(txHash: string): Promise<Decoded | null> {
        return Promise.resolve(null)
    }

    async getManyDecodedData(txHashes: string[]): Promise<Array<Decoded> | null> {
        return Promise.resolve(null)
    }

    async addOrUpdateDecodedData(decodedData: Decoded): Promise<void> {
        return Promise.resolve()
    }
    async addOrUpdateManyDecodedData(decodedDataArr: Decoded[]): Promise<void> {
        return Promise.resolve()
    }

    async addOrUpdateInterpretedData(interpretedData: Interpretation): Promise<void> {
        return Promise.resolve()
    }
    async addOrUpdateManyInterpretedData(interpretedDataArr: Interpretation[]): Promise<void> {
        return Promise.resolve()
    }

    async getInterpretedData(txHash: string, userAddress: string | null): Promise<Interpretation | null> {
        return Promise.resolve(null)
    }

    async getManyInterpretedData(
        txHashes: string[],
        userAddress: string | null,
    ): Promise<Array<Interpretation | null> | null> {
        return Promise.resolve(null)
    }

    async getAllInterpretationsForTxHash(txHash: string): Promise<Interpretation[] | null> {
        return Promise.resolve(null)
    }
    async getAllInterpretationsForAddress(address: string): Promise<Interpretation[] | null> {
        return Promise.resolve(null)
    }
}
