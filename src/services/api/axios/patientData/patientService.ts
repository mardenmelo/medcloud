import { Api } from "..";
import { PatientListProps } from "../../../../dtos/PatientListProps";


type TotalPatient = {
    data: PatientListProps;
    totalCount: number;
}

const getAll = async( page=1, filter = '' ): Promise<TotalPatient | Error> => {
    try{
        const relativeUrl = `/listpatient?_page=${page}&_limit=10&name_like=${filter}`

        const { data, headers } = await Api.get(relativeUrl);

        if (data) {
            return {  
              data,
              totalCount: Number(headers['x-total-count'] || 10),
            };
          }

        return new Error('Erro ao listar os pacientes')

    } catch(error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar os pacientes.');
    }
};

const getById = async (id: number): Promise<PatientListProps | Error> => {
    try {
      const { data } = await Api.get(`/patient/${id}`);
  
      if (data) {
        return data;
      }
  
      return new Error('Erro ao consultar os dados.');
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao consultar os dados.');
    }
  };

  const create = async (dataPatient: Omit<PatientListProps, 'id'>): Promise<number | Error> => {
    try {
      const { data } = await Api.post<PatientListProps>('/patient', dataPatient);
  
      if (data) {
        return data.id;
      }
  
      return new Error('Erro ao criar o registro.');
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
    }
  };

  const updateById = async (id: number, dataPatient: PatientListProps): Promise<void | Error> => {
    try {
      await Api.put(`/patient/${id}`, dataPatient);
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao atualizar os dados.');
    }
  };

  const deleteById = async (id: number): Promise<void | Error> => {
    try {
      await Api.delete(`/patient/${id}`);
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao apagar os dados do paciente.');
    }
  };

  export const PatientService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
  };