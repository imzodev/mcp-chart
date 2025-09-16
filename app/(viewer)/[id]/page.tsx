import React from "react";
import ClientRuntime from "./ClientRuntime";

export default function PresentationPage({ params }: { params: { id: string } }) {
  return <ClientRuntime id={params.id} />;
}
