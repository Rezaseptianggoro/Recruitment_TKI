import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Tabel = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () => {
    const response = await Axios.get("http://localhost:3001/users");
    setData(response.data);
  };
  
  const deleteUser = async (id) => {
    try {
      Axios.delete(`http://localhost:3001/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }; 


  const columns = [
    {
      dataField: "id",
      text: "Id",
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "phone",
      text: "Phone",
    },
    
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2 ml-2">
                Edit
              </Button>
            </Link>
            <Button onClick={() => deleteUser(row.id)} color="dark" className="mr-2 ml-2">
              Hapus
            </Button>
          </div>
        );
      },
    },
  ];
  
  
  return (
    <div>
      <Container>
        <Link to={"add/"}>
          <Button color="dark" className="mr-2 mb-3">
            Add User
          </Button>
        </Link>
        <Link to={"operasi/"}>
          <Button color="dark" className="mr-2 mb-3">
            Operasi Matematika
          </Button>
        </Link>
          <h3> notes : Data nomor 1-10 tidak bisa dihapus/update</h3>
        <BootstrapTable keyField="id" data={data} columns={columns} />
      </Container>
    </div>
  );
};

export default Tabel;
