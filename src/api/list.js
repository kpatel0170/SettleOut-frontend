const apiList = {
    // Authentication APIs
    register: {
      url: () => "auth/register",
      method: "post",
    },
    login: {
      url: () => "auth/login",
      method: "post",
    },
    // membership
    findMembership: {
      url: () => "membership/findAll",
      method: "post",
    },
    // Agent
    agentList: {
      url: () => "user/findAll",
      method: "post",
    },
    agentProfile: {
      url: () => "user/agprofile",
      method: "post",
    },
    // Payment
    createTransaction:{
      url:()=>"transaction/create",
      method:"post"
    },
    // Task
    listTasks:{
      url:()=>"task/findAll",
      method:"post"
    },
  
    getUserDetails: {
      url: () => "user/findAll",
      method: "post",
    },
    // update Profile
    updateProfile: {
      url: () => "user/update-profile",
      method: "put",
    },
    // Update Tasks
    updateTaskList:{
      url:()=>"task/updateTaskList",
      method:"patch"
    }
  };
  export default apiList;