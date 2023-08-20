import { FC, useState, useEffect, createContext, ReactNode } from "react";
import { typeMinMaxData, typeProjectData } from "../utils/typeDefs";

export interface ContextProps {
  minMax: typeMinMaxData[];
  setMinMax: (value: typeMinMaxData[]) => void;
  projectData: typeProjectData[];
  setProjectData: (value: typeProjectData[]) => void;
  tableData: any;
  setTableData: (value: any) => void;
  tableHasData: boolean;
  setTableHasData: (value: boolean) => void;
}

const Context = createContext<ContextProps | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const projectPlaceholder = [
    {
      projectName: "",
      projectDescription: "",
      clientName: "",
      contractorName: "",
    },
  ];

  const minMaxPlaceholder = [
    {
      title: "X",
      minValue: undefined,
      maxValue: undefined,
    },
    {
      title: "Y",
      minValue: undefined,
      maxValue: undefined,
    },
    {
      title: "Z",
      minValue: undefined,
      maxValue: undefined,
    },
  ];

  const [minMax, setMinMax] = useState<typeMinMaxData[]>(minMaxPlaceholder);
  const [projectData, setProjectData] =
    useState<typeProjectData[]>(projectPlaceholder);
  const [tableData, setTableData] = useState<any>([]);
  const [tableHasData, setTableHasData] = useState<boolean>(false);

  useEffect(() => {
    if(tableData.header && tableData.data) {
      setTableHasData(true);
    }
  }, [tableData.header, tableData.data]);

  return (
    <Context.Provider
      value={{
        minMax,
        setMinMax,
        projectData,
        setProjectData,
        tableData,
        setTableData,
        tableHasData,
        setTableHasData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
