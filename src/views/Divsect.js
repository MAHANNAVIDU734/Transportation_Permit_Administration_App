import { Card, CardHeader, CardBody, CardTitle, CardText,  Form, Label, Input, Button  } from 'reactstrap'
import Select from 'react-select'


const Divsect = () => {
  const formatGroupLabel = data => (
    <div className='d-flex justify-content-between align-center'>
      <strong>
        <span>{data.label}</span>
      </strong>
      <span>{data.options.length}</span>
    </div>
  )
  const groupedOptionsDistrict = [
    {
      label: 'District',
      options: [
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
      ]
    },
  ]
  const groupedOptionsProvince = [
    {
      label: 'Province',
      options: [
        {value:'Central-Province', label:'Central-Province'},
          {value:'Eastern-Province ', label:'Eastern-Province'},
          {value:'Northern-Province ', label:'Northern-Province'},
          {value:'Southern-Province ', label:'Southern-Province'},
          {value:'Western-Province ', label:'Western-Province'},
          {value:'North-Western-Province ', label:'North-Western-Province'},
          {value:'North-Central-Province ', label:'North-Central-Province'},
          {value:'Uva-Province', label:'Uva-Province'},
          {value:'Sabaragamuwa-Province ', label:'Sabaragamuwa-Province'}
      ]
    },
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle>Divisional Secretaries In Sri Lanka</CardTitle>
      </CardHeader>
      <Form>
      <CardBody>
        <CardText>Form</CardText>
        
           <Label>Divisional Secetriate Name</Label>
          <Input type='text' placeholder='Divisional Secetraite Name'/>
          <Label>email</Label>
          <Input type='email' placeholder='Email' />
        <Label>District</Label>
           <Select options={groupedOptionsDistrict}
           formatGroupLabel={formatGroupLabel}
           className='react-select'
           classNamePrefix='select' 
           isClearable={false}/>
        <Label>Province</Label>
        <Select options={groupedOptionsProvince}
        formatGroupLabel={formatGroupLabel}
        className='react-select'
        classNamePrefix='select' 
        isClearable={false}/>
        <Label>Phone-No</Label> 
        <Input type='phoneno'/>
        <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
          <Button outline color='secondary' type='reset'>
          Reset
         </Button>
      </CardBody>
      </Form>
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

