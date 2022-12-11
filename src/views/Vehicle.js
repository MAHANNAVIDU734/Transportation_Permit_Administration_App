import { Card, CardHeader, CardBody, CardTitle, CardText, Label, Form, Input, Button, img } from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'


const onChange = e => {
  const reader = new FileReader(),
    files = e.target.files
  reader.onload = function () {
    setImage(reader.result)
  }
  reader.readAsDataURL(files[0])
}
const groupedOptions = [
  {
    label: 'Trucks',
    options: [
      { value: 'Lorry', label: 'Lorry' },
      { value: 'Pickups', label: 'Pickups' },
      { value: 'Tracktor', label: 'Tracktor' },
      { value: 'Tow_Truck', label: 'Tow_Truck' },
      { value: 'Fire_Engine', label: 'Fire_Engine' },
      { value: 'Van', label: 'Van' },
      { value: 'Cement_Mixer', label: 'Cement_Mixer' },
      { value: 'Tanker', label: 'Tanker' },
      { value: 'Tracktor_Trailer', label: 'Tracktor_Trailer' },
      { value: 'Fork_Lift', label: 'Fork_Lift' }
    ]
  },
  {
    label: 'Tipper',
    options: [
      { value: 'Small', label: 'Small' },
      { value: 'Light', label: 'Light' },
      { value: 'Medium', label: 'Medium' },
      { value: 'Heavy', label: 'Heavy' },
      { value: 'Very_Heavy', label: 'Very_Heavy' }
    ]
  }
]
const formatGroupLabel = data => (
  <div className='d-flex justify-content-between align-center'>
    <strong>
      <span>{data.label}</span>
    </strong>
    <span>{data.options.length}</span>
  </div>
)
const Vehicle = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Using Vehicles In Sri Lanka</CardTitle>
      </CardHeader>
      <CardBody>
      <Form>
        <CardText>Form</CardText>
        <Label>Vehicle_No_Plate_ID</Label>
        <Input placeholder="Vehicle_No_Plate_ID" type="text"/>
        <Label>Vehicle_Owner_Name</Label>
        <Input placeholder="Vehicle_Owner_Name" type="text"/>
        <Label className='form-label'>Vehicle _Type</Label>
            <Select
              isClearable={false}
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}
              className='react-select'
              classNamePrefix='select'
            />
            <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
          <Button outline color='secondary' type='reset'>
          Reset
         </Button>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Vehicle