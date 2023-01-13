import react, { useState } from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText,  Container, Label, Input, Button  } from 'reactstrap';
import { addDivsect } from '../api/divsectApi.js';
import { useHistory } from 'react-router-dom'; 
import Select from 'react-select';
import QRCode from "react-qr-code";

const initialValue = {
  divsect_name:'',
  email:'',
  district:'',
  province:'',
  phoneno:'',
}

const Divsect = () => {
  const [divsect, setDivsect] = useState(initialValue);
  const { divsect_name, email, district, province, phoneno } = divsect;
  const [ qrcode, useqrcode] = useState("");

  let navigate = useHistory();

  const onValueChange = (e) => {
    setDivsect({...divsect, [e.target.name]: e.target.value})
  }

  const addDivsectDetails = async() => {
    await addDivsect(divsect);
      navigate('/divsect');
  }

  const onAddQRCode = (e) => {
    useqrcode({...qrcode, [e.target.name]: e.target.value})
  }

  const formatGroupLabel = data => (
    <div className='d-flex justify-content-between align-center'>
      <strong>
        <span>{data.label}</span>
      </strong>
      <span>{data.options.length}</span>
    </div>
  )
  const groupedOptionsDistrict = [
          {value:'Colombo', label:'Colombo'},
          {value:'Gampaha', label:'Gampaha'},
          {value:'Kalutara', label:'Kalutara'},
          {value:'Kandy', label:'Kandy'},
          {value:'Matale', label:'Matale'},
          {value:'Nuwara-Eliya', label:'Nuwara Eliya'},
          {value:'Galle', label:'Galle'},
          {value:'Matara', label:'Matara'},
          {value:'Hambantota', label:'Hambantota'},
          {value:'Jaffna', label:'Jaffna'},
          {value:'Kilinochchi', label:'Kilinochchi'},
          {value:'Mannar', label:'Mannar'},
          {value:'Vavuniya', label:'Vavuniya'},
          {value:'Mullaitivu', label:'Mullaitivu'},
          {value:'Batticaloa', label:'Batticaloa'},
          {value:'Ampara', label:'Ampara'},
          {value:'Trincomalee', label:'Trincomalee'},
          {value:'Kurunegala', label:'Kurunegala'},
          {value:'Puttalam', label:'Puttalam'},
          {value:'Anuradhapura', label:'Anuradhapura'},
          {value:'Polonnaruwa', label:'Polonnaruwa'},
          {value:'Badulla', label:'Badulla'},
          {value:'Moneragala', label:'Moneragala'},
          {value:'Ratnapura', label:'Ratnapura'},
          {value:'Kegalle', label:'Kegalle'}
  ];
    
  const groupedOptionsProvince = [
          {value:'Central-Province', label:'Central-Province'},
          {value:'Eastern-Province ', label:'Eastern-Province'},
          {value:'Northern-Province ', label:'Northern-Province'},
          {value:'Southern-Province ', label:'Southern-Province'},
          {value:'Western-Province ', label:'Western-Province'},
          {value:'North-Western-Province ', label:'North-Western-Province'},
          {value:'North-Central-Province ', label:'North-Central-Province'},
          {value:'Uva-Province', label:'Uva-Province'},
          {value:'Sabaragamuwa-Province ', label:'Sabaragamuwa-Province'}
  ];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Divisional Secretaries In Sri Lanka</CardTitle>
      </CardHeader>
      <Container>
      <CardBody>
        <CardText>Form</CardText>
        
           <Label htmlFor="my-input">Divisional Secetriate Name</Label>
          <Input type='text' placeholder='Divisional Secetraite Name' value={divsect_name} onChange={(e) => onValueChange(e)} name="divsect_name" id="my-input"/>
          <Label htmlFor="my-input">email</Label>
          <Input type='email' placeholder='Email' value={email} onChange={(e) => onValueChange(e)} name="email" id="my-input"/>
        <Label htmlFor="my-input">District</Label>
           <Select 
           options={groupedOptionsDistrict}
           formatGroupLabel={formatGroupLabel}
           className='react-select'
           classNamePrefix='select' 
           isClearable={false} 
           defaultValue={groupedOptionsDistrict[1]}
           value={district}
           name="district"
           id="my-input"
           onChange={(e) => onValueChange(e)}
           />
        <Label htmlFor="my-input">Province</Label>
        <Select 
        defaultValue={groupedOptionsProvince[1]}
        options={groupedOptionsProvince}
        formatGroupLabel={formatGroupLabel}
        className='react-select'
        classNamePrefix='select' 
        isClearable={false}
        value={province}
        name="province"
        id="my-input"
        onChange={(e) => onValueChange(e)}
        />
        <Label htmlFor="my-input">Phone-No</Label> 
        <Input type='phoneno' value={phoneno} onChange={(e) => onValueChange(e)} name="phoneno" id="my-input"/>
        <Button color='primary' onClick={() => addDivsectDetails()}>
            Add Divsect
          </Button>
          <Button outline color='secondary' type='reset'>
          Reset
         </Button>
      </CardBody>
      <QRCode value={qrcode} name="qrcode" onChange={(e)=>onAddQRCode()}/>
      </Container>
      <Card>
    <CardHeader>
      <CardTitle>Table of Divisional Secretaries</CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>Table</CardText>
      <CardText>
        
      </CardText>
    </CardBody>
        </Card>
        </Card>
  )
}

export default Divsect

