<Popup>
	<table>
		<tr>
			<td className='rightAlign'>Longitude of Connected Radio:</td>
			<td className='leftAlign'>
				{data[counts]['Longitude of Connected Radio']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>Latitude of Connected Radio:</td>
			<td className='leftAlign'>
				{data[counts]['Latitude of Connected Radio']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>Place:</td>
			<td className='leftAlign'>{data[counts]['Place']}</td>
		</tr>
		<tr>
			<td className='rightAlign'>Event Technology:</td>
			<td className='leftAlign'>{data[counts]['Event Technology']}</td>
		</tr>
		<tr>
			<td className='rightAlign'>LTE KPI PCell Serving Band:</td>
			<td>{data[counts]['LTE KPI PCell Serving Band']}</td>
		</tr>
		<tr>
			<td className='rightAlign'>LTE KPI PCell Serving BandWidth(DL):</td>
			<td className='leftAlign'>
				{data[counts]['LTE KPI PCell Serving BandWidth(DL)']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>LTE KPI PCell Serving RSRP[dBm]:</td>
			<td className='leftAlign'>
				{data[counts]['LTE KPI PCell Serving RSRP[dBm]']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>LTE KPI PCell Serving RSRQ[dB]:</td>
			<td className='leftAlign'>
				{data[counts]['LTE KPI PCell Serving RSRQ[dB]']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>LTE KPI PCell CQI:</td>
			<td>{data[counts]['LTE KPI PCell CQI']}</td>
		</tr>
		<tr>
			<td className='rightAlign'>LTE KPI PCell Serving BandWidth(DL):</td>
			<td className='leftAlign'>
				{data[counts]['LTE KPI PCell Serving BandWidth(DL)']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>LTE KPI PCell SINR[dB]:</td>
			<td>{data[counts]['LTE KPI PCell SINR[dB]']}</td>
		</tr>
		<tr>
			<td className='rightAlign'>Throughput (Kbps):</td>
			<td className='leftAlign'>{data[counts]['Throughput (Kbps)']}</td>
		</tr>
		<tr>
			<td className='rightAlign'>RTT (ms):</td>
			<td className='leftAlign'>{data[counts]['RTT (ms)']}</td>
		</tr>
		<tr>
			<td className='rightAlign'>Application Device Task Total:</td>
			<td className='leftAlign'>
				{data[counts]['Application Device Task Total']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>Application Device Application Task:</td>
			<td className='leftAlign'>
				{data[counts]['Application Device Application Task']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>Application Device CPU Utilization Total:</td>
			<td className='leftAlign'>
				{data[counts]['Application Device CPU Utilization Total']}
			</td>
		</tr>
		<tr>
			<td className='rightAlign'>
				Application Device CPU Utlization Application:
			</td>
			<td className='leftAlign'>
				{data[counts]['Application Device CPU Utlization Application']}
			</td>
		</tr>
	</table>
</Popup>;
