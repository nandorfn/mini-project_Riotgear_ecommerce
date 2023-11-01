import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProductData } from "../utils/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useActionTable = (
  data: ProductData[], 
  setData: Dispatch<SetStateAction<ProductData[]>>,
  setFilteredData: Dispatch<SetStateAction<ProductData[]>>, 
  setEditedData: Dispatch<SetStateAction<ProductData | undefined>>,
  query: string
  
  ) => {
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState({
      editModal: false,
      addModal: false,
      loading: false
    })
  
  
  useEffect(() => {
    if (data.length === 0) {
      setModal((prevState) => ({
        ...prevState,
        loading: true
      }));
      axios.get(query)
        .then(response => {
          const newData = [
            ...data,
            ...response.data
          ];
          setData(newData);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setModal((prevState) => ({
            ...prevState,
            loading: false
          }));
        })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id: number) => {
    setModal((prevState) => ({
      ...prevState,
      loading: true
    }));
    axios.delete(`${query}/${id}`)
    .then((res) => {
      console.log(res);
      const filterData = data.filter((item: unknown) => {
        if (typeof item === 'object' && item !== null && 'id' in item) {
          return (item as { id: number }).id !== id;
        }
        return true;
      });
      setData(filterData);
      toast.success('Data deleted succesfully!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
      .catch(error => { 
        console.error(error) 
        toast.error('Data failed to delete!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });  
        toast.info('Note: Products that have been sold or have been added to a user cart cannot be deleted!', {
          position: "top-center",
          delay: 1200,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });  
      })
      .finally(() => {
        setModal((prevState) => ({
          ...prevState,
          loading: false
        }));
      });
  }

  const handleEdit = (id: number) => {
    const dataToEdit = [...data.filter((item: unknown) =>  {
      if (typeof item === 'object' && item !== null && 'id' in item) {
        return (item as { id: number }).id === id;
      }
      return true;
    })];
    setEditedData(dataToEdit[0]);

  };

  const handleInput = (e: React.SyntheticEvent) => {
    const { value } = (e.target as HTMLInputElement);
    setSearch(value)
    onFilter(value);
  }
  const handleAddModal = () => {
    setModal((prevState) => ({
      ...prevState,
      addModal: !prevState.addModal
    }));
  };
  const handleEditModal = () => {
    setModal((prevState) => ({
      ...prevState,
      editModal: !prevState.editModal
    }));
  };

  const onFilter = (query: string) => {
    let filter = data?.filter((item: unknown) => {
      if (typeof item !== 'object' || item === null) {
        return false;
      }
      if ('productName' in item) {
        return (item.productName as string).toLowerCase().includes(query);
      } else if ('title' in item) {
        return (item.title as string).toLowerCase().includes(query);
      }
      return true;
    });
  
    setFilteredData(filter);
  }
  
  return {
    modal,
    search,
    handleInput,
    handleAddModal,
    handleEdit,
    handleEditModal,
    handleDelete
  }
}

export default useActionTable;