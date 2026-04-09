import { useLoaderData, useNavigation, useParams } from "react-router";
import { ContactInformation } from "./ContactInformation";
import { NoContactSelected } from "./NoContactSelected";
import { ContactInformationSkeleton } from "./ContactInformationSkeleton";
import type { Client } from "~/chat/interfaces/chat.interface";

export const ContactInformationCard = () => {
  const { id } = useParams();
  const { clients = [] } = useLoaderData();
  const { state: isPending } = useNavigation();

  if (isPending === "loading") {
    return <ContactInformationSkeleton />;
  }

  if (!id) return <NoContactSelected />;

  const client = clients.find((client: Client) => client.id === id);

  if (!client) return <NoContactSelected />;

  return <ContactInformation {...client} />;
};
