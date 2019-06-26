import axios from 'axios';
import { BASE_URL, getHeaders } from '../utilities';
import {
  GET_INCIDENT_TOTALS
} from './types'

const storeTotals = data => {

  const payload = {
    redflagTotals: {
      pending: data['data']['pending_red-flag']['count'],
      rejected: data['data']['rejected_red-flag']['count'],
      investigation: data['data']['investigation_red-flag']['count'],
      resolved: data['data']['resolved_red-flag']['count'],
      total: data['data']['total_red-flag']['count']
    },
    interventionTotals: {
      pending: data['data']['pending_intervention']['count'],
      rejected: data['data']['rejected_intervention']['count'],
      investigation: data['data']['investigation_intervention']['count'],
      resolved: data['data']['resolved_intervention']['count'],
      total: data['data']['total_intervention']['count']
    }
  };

  return { type: GET_INCIDENT_TOTALS, payload };
}

const getIncidentTotalsAction = () => dispatch => {
  const url = `${BASE_URL}${'incidents/totals'}`;

  return axios.get(url, getHeaders())
    .then(({ data: data }) => dispatch(storeTotals(data)))
};

export default getIncidentTotalsAction;
