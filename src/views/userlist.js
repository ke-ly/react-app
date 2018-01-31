import React,{Component} from "react";
import { List } from "antd-mobile";
import TabBar from "../components/tabbar";
import PageHead from "../components/menu";

class UserList extends Component{
    constructor(props){
        super(props);

        this.state = {
            users:[
                {
                    thumb:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2430565610,2590674444&fm=27&gp=0.jpg',
                    time:'22:21',
                    name:'张三',
                    text:'青蛙能说就就走，你却逃离表这生活'  
                },
                {
                    thumb:'http://img1.imgtn.bdimg.com/it/u=2640120501,1363068424&fm=27&gp=0.jpg',
                    time:'20:59',
                    name:'李四',
                    text:'青蛙能说就就走，你却逃离表这生活'  
                },
                {
                    thumb:'http://img2.imgtn.bdimg.com/it/u=1327594577,3360202789&fm=27&gp=0.jpg',
                    time:'15:21',
                    name:'王五',
                    text:'青蛙能说就就走，你却逃离表这生活'  
                },
                {
                    thumb:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4046887554,1531109552&fm=27&gp=0.jpg',
                    time:'14:10',
                    name:'萧平旌',
                    text:'青蛙能说就就走，你却逃离表这生活'  
                },
                {
                    thumb:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3047235937,140769279&fm=27&gp=0.jpg',
                    time:'15:21',
                    name:'萧平章',
                    text:'青蛙能说就就走，你却逃离表这生活'  
                },
                {
                    thumb:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=530962570,1938776024&fm=27&gp=0.jpg',
                    time:'15:21',
                    name:'蔺晨',
                    text:'青蛙能说就就走，你却逃离表这生活'  
                },
                {
                    thumb:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4183820083,1166594205&fm=27&gp=0.jpg',
                    time:'15:21',
                    name:'荀白水',
                    text:'青蛙能说就就走，你却逃离表这生活'  
                },
            ]
        }
    }

    handleTab = (url) => {
        this.props.history.push(url)
    }

    render(){
        const listItem = this.state.users.map((v,i)=>(
            <List.Item 
            thumb={<img src={v.thumb} style={{width:'40px',height:"40px",borderRadius:'3px'}} alt={v.name}/>}
            align='top'
            wrap={true}
            extra={v.time} key={i}>
                <div>{v.name}</div>
                <List.Item.Brief>{v.text}</List.Item.Brief>
            </List.Item>  
        ))
        return(
            <div>
                <PageHead title="用户列表"/>
                <div style={{paddingBottom:'49px'}}>
                    <List>
                        {listItem}                      
                    </List>
                </div>
                <TabBar history={this.props.history}/>
            </div>
        )
    }
}

export default UserList;