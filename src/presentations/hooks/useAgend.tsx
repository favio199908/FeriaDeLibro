import { useEffect, useState } from "react";

import * as UseCases from "../../../src/core/use-cases";

import { apiDBFetcher } from "../../config/adapters/apiDB.adapters";

import { Agenda } from "../../infrastructure/interfaces/api-db.responses";
import { Fecha } from "../../core/entities/agenda.entity";

export const useAgend = (fecha: string) => {
  const [isLoading, setIsLoading] = useState(true);

  const [cast, setCast] = useState<Fecha[]>();

  useEffect(() => {
    loadMovie();
  }, [fecha]);

  const loadMovie = async () => {
    setIsLoading(true);

    const castPromise = UseCases.getAgendaByFechaUseCase(apiDBFetcher, fecha);

    const [cast] = await Promise.all([castPromise]);

    setCast(cast);

    setIsLoading(false);
    console.log({ cast });
  };

  return {
    isLoading,

    cast,
  };
};
