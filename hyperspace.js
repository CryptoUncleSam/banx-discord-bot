import { HyperspaceClient } from 'hyperspace-client-js';
import dotenv from "dotenv";

dotenv.config();


// Connection to HS client
const client = new HyperspaceClient(process.env.HYPERSPACE_TOKEN);

// Create gql query for listing
function createQuery(banxNumber){
    let query = {
        condition: {
            projects: [
                {
                    project_id: 'BHexcGVJbpbk1DCJfT8GJph7wYiFTiMc3iTVc6ACP99W'
                }
            ],
            name: {
                operation: 'EXACT',
                value: `Banx #${banxNumber}`
            },
        },
    };

    return query;
};

export async function getBanxMetadata(banxNumber){
    const nft = await client.getMarketplaceSnapshot(createQuery(banxNumber));
    const metadata = nft.getMarketPlaceSnapshots.market_place_snapshots[0].attributes
    return metadata;
};

