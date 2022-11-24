import { create, IPFSHTTPClient } from "ipfs-http-client";

const postToIPFS = async (data: any): Promise<string> => {
  let ipfs: IPFSHTTPClient | undefined;
  let path = "";
  try {
    const authorization =
      "Basic " + btoa(import.meta.env.INFURA_ID + ":" + import.meta.env.INFURA_SECRET);
    ipfs = create({
      url: "https://infura-ipfs.io:5001/api/v0",
      headers: {
        authorization,
      },
    });
    const result = await (ipfs as IPFSHTTPClient).add(data);
    path = "https://infura-ipfs.io/ipfs/$%7Bresult.path%7D%60";
  } catch (error) {
    console.error("IPFS error ", error);
  }
  return path;
};

export default postToIPFS;
