import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import FarmDetail from "components/FarmDetail";
import { loadFarmAPI } from "api/farm";

function FarmDetailPage({
  farmData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <FarmDetail farmData={farmData} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const farmId = parseInt(params?.farmId as string);

  try {
    const response = await loadFarmAPI(farmId);
    if (response.status === 200) {
      const farmData = response.data.data;
      return { props: { farmData } };
    }
    return { props: {} };
  } catch (error) {
    return { notFound: true };
  }
};
export default FarmDetailPage;
