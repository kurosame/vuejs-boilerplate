import axios from 'axios'

jest.mock('axios')

export default axios as jest.Mocked<typeof axios>
