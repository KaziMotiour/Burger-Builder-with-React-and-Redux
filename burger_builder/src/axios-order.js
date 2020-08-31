import axios from 'axios'

const Instance= axios.create({
    baseURL:'https://burger-builder-1e42d.firebaseio.com/'
})

export default Instance