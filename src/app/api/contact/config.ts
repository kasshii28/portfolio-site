import { config } from "@/lib/config";

const url = config.apiPrefix + config.apiHost + "/api/contact";

export default async function ContactApi() {
  const res = await fetch(url, {
    cache: "no-store",
  });
}
