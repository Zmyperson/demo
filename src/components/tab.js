import React, { Component } from 'react';
import { Table, Tag, Input } from 'antd';
import {dataAction,setNewDataAction,setDefauleDataAction} from '../actions/actionCreator'
import {connect} from 'react-redux'

class Tab extends Component {
  render() {
    // console.log(this.props.data)
    const data = this.props.data[0]?this.props.data:[]
    const defaultData = this.props.defaultData[0]?this.props.defaultData:[]
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      key: "name"
    }, {
      title: '描述',
      dataIndex: 'description',
      key: "description"

    }, {
      title: '图片',
      dataIndex: 'image',
      key: "image",
      render: image => <img src={image} alt='' />,
    },
    {
      title: '地址',
      dataIndex: 'baseURL',
      key: "baseURL",
      render: text => <a href={text}>链接</a>,
    }, {
      title: 'tags',
      dataIndex: 'tags',
      key: "tags",
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      ),
    }];
    return (
      <div>
        <Input placeholder="Basic usage" onChange={this.props.handleChange.bind(this,defaultData)} onKeyDown={this.props.handleChange.bind(this,defaultData)}/>
        <Table dataSource={data} columns={columns} />
      </div>
    );
  }
  componentDidMount() {
    // 组件挂载后去请求数据
    this.props.handleGetData()
  }
}

const mapStateToProps = (state) => ({
    data : state.data,
    defaultData : state.defaultData
})

const mapDispatchToProps = (dispatch) => ({
    handleGetData () {
        dataAction(dispatch)
    },
    handleChange (defaultData,e) {
        //获取搜索框输入的值
        let val = e.target.value;
        // 当输入框的值不为空或者按下回退键
        if (val!=="") {
            console.log(val)
            // 创建正则对象，包含输入的内容，不区分大小写全局检索
            let reg = new RegExp(val, "ig");
            let arr = defaultData;
            let newArr = [];
            // 遍历数组
            for (var i = 0; i < arr.length; i++) {
                // 设置标志位
                var bStop = false;
                // 查询数组中每条数据的tags是否包含搜索框输入的内容
                arr[i].tags.map((item) => {
                if (reg.test(item)) {
                    // 包含的话设标志位为true
                    bStop = true;
                    return
                }
                })
                // console.log(bStop)
                if (bStop) {
                // 将标志位为true的即包含搜索框输入的内容的数据存入newArr
                newArr.push(arr[i]);
                }
            }
            // console.log(newArr)
            // 派发action去设置data为newArr
            dispatch(setNewDataAction(newArr))
        } else {
            // 输入为空的时候
            // 派发action设置data为defaultData
            dispatch(setDefauleDataAction())
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Tab);
