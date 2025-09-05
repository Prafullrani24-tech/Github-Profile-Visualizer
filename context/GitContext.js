import React from 'react'

const GitContext = React.createContext({
  userName: '',
  menuClicked: false,
  onClickMenu: () => {},
  onChangeInput: () => {},
  activeTab: 'home',
  onClickTab: () => {},
  searchUserData: {},
  onChangeUserData: () => {},
})

export default GitContext
