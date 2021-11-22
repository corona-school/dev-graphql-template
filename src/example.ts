import { LoginLegacyDocument, UserQueryDocument } from "./queries";
import { mutate, query} from "./client";

(async function main() {
    await mutate(LoginLegacyDocument, { authtoken: "authtokenP1" });

    const { me } = await query(UserQueryDocument, {});
    console.log(`Retrieved user data for ${me.firstname} ${me.lastname}`);
  })();
  