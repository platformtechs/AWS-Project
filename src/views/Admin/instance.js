import React from "react";
import {
  TabContent,
  Table,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Spinner,
  Container,
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { getUserApi, authToken, userInfo, startInstanceApi, stopInstanceApi, rebootInstanceApi, deleteInstanceApi, renewPack, getPassApi, userType, getInstanceApi } from "../../api";
// import {user} from "./data.json";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      isLoading:false,
      user:this.props.location.user,
      toggleModal:false,
      pack:'',
      renew:false,
      password:false,
      usertype:'',
      instace:''
    };
  }
  UNSAFE_componentWillMount() {
      console.log("hi",this.props.location.user)
    if(!this.props.location.user){
        console.log("component")
        this.setState({isLoading:true})
      this.fetchData()
    }
  }

  fetchData = async () => {
    try {
      let token = await localStorage.getItem(authToken)
    let _id = await localStorage.getItem("temp")
    let {user} = await getUserApi.auth(`Bearer ${token}`).post({_id}).json()
    console.log("user", user)
    if(user.usertype === "SUBADMIN"){
      this.props.location.goBack()
    }
    await this.fetchInstance()
    // let users = user
    this.setState({user:user, isLoading:false})
    } catch (error) {
      console.log("err", error)
      // this.setState({isLoading:false})
      this.props.history.push("/")
    }

  }

  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handelStart = async () => {
    this.setState({isLoading:true})
    let token = await localStorage.getItem(authToken)
    let _id = await localStorage.getItem(userInfo)
    let {instanceid} = this.state.user
    let {error} = await startInstanceApi.auth(`Bearer ${token}`).post({_id, instanceid}).json()
    if(!error){
      alert("instance started");
      window.location.reload()
    } else {
      alert("error occured")
      this.setState({isLoading:false})
    }
  }

  handelStop = async () => {
    this.setState({isLoading:true})
    let token = await localStorage.getItem(authToken)
    let _id = await localStorage.getItem(userInfo)
    let {instanceid} = this.state.user
    let {error} = await stopInstanceApi.auth(`Bearer ${token}`).post({_id, instanceid}).json()
    if(!error){
      alert("instance stopped");
      window.location.reload()
    } else {
      alert("error occured")
      this.setState({isLoading:false})
    }
  }

  handelReboot = async () => {
    this.setState({isLoading:true})
    let token = await localStorage.getItem(authToken)
    let _id = await localStorage.getItem(userInfo)
    let {instanceid} = this.state.user
    let {error} = await rebootInstanceApi.auth(`Bearer ${token}`).post({_id, instanceid}).json()
    if(!error){
      alert("instance rebootedd");
      window.location.reload()
    } else {
      alert("error occured")
      this.setState({isLoading:false})
    }
  }

  handleDelete = async () => {
    this.setState({isLoading:true})
    let token = await localStorage.getItem(authToken)
    let _id = await localStorage.getItem(userInfo)
    let {instanceid} = this.state.user
    let {error} = await startInstanceApi.auth(`Bearer ${token}`).post({_id, instanceid}).json()
    if(!error){
      alert("instance deleted");
      window.location.reload()
    } else {
      alert("error occured")
      this.setState({isLoading:false})
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      toggleModal: !prevState.toggleModal
    }));
  }

  RenewPack = async () => {
    try {
      this.setState({renew:true});
      let oldToken = await localStorage.getItem(authToken)
      let _id = await localStorage.getItem("temp")
      await renewPack.auth(`Bearer ${ oldToken }`).post({_id, days:this.state.pack}).json()
      await this.setState({renew:false, pack:'', toggleModal:false});
      alert("pack updated");
      this.props.history.goBack();
    } catch (error) {
      console.log("err",error)
      alert("error occured try again");
      this.setState({pack:'', toggleModal:false, renew:false})
    }
    console.log("renew packed");
  }

  getPass = async (instanceid) => {
    try {
      this.setState({isLoading:true})
    const _id = await localStorage.getItem(userInfo);
    const token = await localStorage.getItem(authToken);
    let {password} = await getPassApi.auth(`Bearer ${token}`).post({_id, instanceid}).json()
    this.setState({password, isLoading:false})
    } catch (error) {
      alert("error")
      this.setState({isLoading:false})
    }
  }

  componentDidMount(){
    if(this.props.location.user){
      localStorage.setItem("temp", this.props.location.user._id)
      this.fetchInstance()
    }
    this.userTypeUtil();
  }

 userTypeUtil = async () => {
   let usertype = await localStorage.getItem(userType);
   this.setState({usertype});
 }

 fetchInstance = async () => {
   let instanceid = this.state.user.instanceid
   const token = await localStorage.getItem(authToken);
   let {result} = await getInstanceApi.auth(`Bearer ${token}`).post({instanceid}).json()
   this.setState({instace:result, isLoading:false})
 }

  render() {
    console.log(this.props)
    console.log(this.state)
    let {isLoading, user, renew, password, usertype, instance} = this.state
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <h3>Instance Details</h3>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
                <Container>
                    <Modal isOpen={this.state.toggleModal} toggle={this.toggleModal} className={this.props.className}>
                      <ModalHeader toggle={this.toggleModal}>Renew Package</ModalHeader>
                      <ModalBody>
                       <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-cursor"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" placeholder="Select Package" name="MicrosoftWindowServer2012R2Base" onChange={(e)=>this.setState({pack:e.target.value})}>
                      <option value="default">Select Package</option>
                      <option value="30">30 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                    </Input>
                    </InputGroup>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.RenewPack}>{renew ? "Loading..":"Submit"}</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                  <br />
                  <br />
                  {isLoading ? (
                    <div className="app flex-row align-items-center justify-content-center">
                    <Spinner
                        style={{ width: "5rem", height: "5rem" }}
                        color="primary"
                    />
                    </div>
                ) : (
                  <Table>
                    <tbody>
                      <tr>
                        <td>User Name : </td>
                        <td>{user.username}</td>
                      </tr>
                      <tr>
                        <td>Panel Password : </td>
                        <td>{user.panelpass}</td>
                      </tr>
                      <tr>
                        <td>Ip Address : </td>
                        <td>{instance.PublicIpAddress || ''}</td>
                      </tr>
                      <tr>
                        <td>Instance Password : </td>
                        <td>{password ? password:<Button color="primary" onClick={()=>this.getPass(user.instanceid)}>get password</Button>}</td>
                      </tr>
                       <tr>
                        <td>Instace Id : </td>
                        <td>{user.instanceid}</td>
                      </tr>
                      <tr>
                        <td>Region: </td>
                        <td>Mumbai</td>
                      </tr>
                      <tr>
                        <td>Instance Status : </td>
                        <td>{instance.State.Name || ''}</td>
                      </tr>
                      <tr>
                        <td>Expired At : </td>
                        <td>{user.expiredat}</td>
                      </tr>
                      <tr>
                        <td>Account Status : </td>
                        <td>{user.isdeactivated}</td>
                      </tr>
                    </tbody>
                  </Table>)}
                  <div className="text-center">
                    <Link to={"/manage-instance"}>
                      <Button color="primary" style={{margin:"10px"}}>
                        Back
                      </Button>
                    </Link>
                    {"    "}
                    <Button color="success" style={{margin:"10px"}} onClick={this.handelStart}>
                      Start Instance
                    </Button>
                    {"    "}
                    <Button color="warning" style={{margin:"10px"}} onClick={this.handelStop}>
                      Stop Instance
                    </Button>
                    {"    "}
                    <Button color="info" style={{margin:"10px"}} onClick={this.handelReboot}>
                      Reboot Instance
                    </Button>
                    {"    "}
                    {usertype ==="SUBADMIN" &&<Button color="danger" style={{margin:"10px"}} onClick={this.handleDelete}>
                      Delete Instance
                    </Button>}
                    {"    "}
                    {usertype ==="SUBADMIN" && <Button color="success" style={{margin:"10px"}} onClick={this.toggleModal}>
                      Renew Package
                    </Button> }
                    {"    "}
                  </div>
                </Container>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
