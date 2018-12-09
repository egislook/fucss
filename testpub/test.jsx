import React, {Component} from 'react'
import { faSearchMinus, faSearchPlus, faExpandArrowsAlt, faCircle, faBan, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const data = [
	{ label: "First Name", type: "text", value: "PHAMNAN", class: "" },
	{ label: "Last Name", type: "text", value: "KEO", class: "" },
	{ label: "Date of Birth", type: "text", value: "03/04/1986", class: "" },
	{ label: "Gender", type: "text", value: "Male", class: "" },
	{ label: "Nationality", type: "text", value: "Cambodian", class: "" },
	{ label: "ID Type", type: "text", value: "Khmer ID Card", class: "" },
	{ label: "Expiry Date", type: "text", value: "13/12/2024", class: "" },
	{ label: "Sangkat", type: "text", value: "សង្កាត់ចោមចៅ", class: "" },
	{ label: "Khan", type: "text", value: "ខណ្ឌពោធ៍សែនជ័យ", class: "" },
	{ label: "City", type: "text", value: "ភ្នំពេញ", class: "" },
]

const analysis = [
	{
		section: 'selfie',
		fields: [
			{ status: 'fail', label: 'Face Match', value: '0%' },
			{ status: 'fail', label: 'Age', value: '17' },
			{ status: 'fail', label: 'Gender', value: 'Female' },
			{ status: 'warning', label: 'Ethnicity', value: 'Anglo-Saxon' },
		]
	},
	{
		section: 'id',
		fields: [
			{ status: 'success', label: 'Photo ID %', value: '98%' },
			{ status: 'success', label: 'Tampering - Physical', value: '3%' },
			{ status: 'success', label: 'Tampering - Digital', value: '2%' },
		]
	},
	{
		section: 'info',
		fields: [
			{ status: 'success', label: 'Liveness', value: '0%' },
			{ status: 'success', label: 'OCR - MRZ Match', value: '99%' },
			{ status: 'success', label: 'ID Type Match', value: '97%' },
		]
	}
]

let isDataValid = true

analysis.map(item => {
	item.fields.map(f => {
		if(f.status === "fail"){
			isDataValid = false
			return 
		}
	})
});

const classNamesSomething = {
  classMidColumnTextTitle: 'fw:600 ta:l c:black100 fs:85pc',
  classMidColumnTextAddress: 'ta:l c:black100 fs:85pc fw:500',
  classMidColumnTextStatus: 'ta:l c:red fs:85pc fw:500'
}

const classNameTest = "ta:l c:red fs:85pc fw:500"

const classNames = (test) => fucss({
  'bg:black p:2px': test === 'test',
  'bd-clp:clp': true
})

console.log(isDataValid)
class KYC extends Component {
	render() {
		return (
			<div className="m:20px-0">
				<div className="dp:tb lg-w:33.33pc_tl:fx_of:hd_dp:td_vlgn:m_section ps:rl_section p:10px_div">
					<section className="bg:343434">
						<div className="bg:F57167 ps:ab t,l:0 w:100pc"> 
							SELFIE 
						</div>
						<div className="c:white_bg:111_p:10px_button h:100pc">
								<img src="http://www.hyperconectados.com/wp-content/uploads/2014/03/Selfie.jpg" className="w:100pc"/>
								<div className="ps:ab b:0 w:100pc m-r,m-l:a">
									<button className="hv-bg:gray br:6px-0-0-6px"><FontAwesomeIcon icon={faSearchMinus} size="lg"/></button>
									<button className="hv-bg:gray"><FontAwesomeIcon icon={faSearchPlus} size="lg"/></button>
									<button className="hv-bg:gray br:0-6px-6px-0"><FontAwesomeIcon icon={faExpandArrowsAlt} size="lg"/></button>
								</div>
						</div>
					</section>
					<section className="bg:464646">
						<div className="bg:969696 ps:ab t,l:0 w:100pc c:white">CAMBODIAN DRIVER LICENSE</div>
						<div className="c:white_bg:111_p:10px_button h:100pc">
								<img src="https://register.wingmoney.com/waor/public/images/identity_front.png" className="w:100pc"/>
								<div className="ps:ab b:0 w:100pc m-r,m-l:a">
									<button className="hv-bg:707070 br:6px-0-0-6px"><FontAwesomeIcon icon={faSearchMinus} size="lg"/></button>
									<button className="hv-bg:707070"><FontAwesomeIcon icon={faSearchPlus} size="lg"/></button>
									<button className="hv-bg:707070 br:0-6px-6px-0"><FontAwesomeIcon icon={faExpandArrowsAlt} size="lg"/></button>
								</div>
						</div>
					</section>
					<section className="bg:C9C9C9">
						<div className="bg:6073F5 c:white">INFORMATION</div>
						<div className="hlgn:l_div m-r:5px_label p:5px_input">
							<h1>OCR/MRZ</h1>
							{
								data.map(item => {
									return (
										<div>
											<span className="w:40pc ta:r p-r:10px"><label>{item.label}</label></span>
											<span className="w:60pc">
												<input className="w:100pc p:10px-15px-! bg:white bd:1px-sld-grey200 fc-bs:1" type={item.type} value={item.value} />
											</span>
										</div>
									)
								})
							}
						</div>
					</section>
				</div>
				
				<hr className="bd:1px-solid-gray mrg-t:16px"/>
				
				<div className="dp:flx w:33.33pc_vlgn:m_section p:10px_div">
							{
								analysis.map(item => {
									return (
										<section className="dp:flx w:33.33pc_span">
											<div className="w:100pc w:33.33pc_span">
												{
													item.fields.map(f => {
														return (
															<div >
																<span className="ta:l"><FontAwesomeIcon icon={faCircle} 
																	color={
																		f.status === 'fail' ?
																			'#F57167'
																			: f.status === 'warning' ? 
																				'#FFD13C' 
																				: '#8DBD61'
																	}
																/> {f.label}</span>
																<span>{f.value}</span>
																{ f.status === 'fail' ? <span className="ta:r"><button className="p:8px br:6px bg:F57167 c:white">Resolve</button></span> : <span></span> }
															</div>
														)
													})
												}
												
											</div>
										</section>
									)
								})
							}
				</div>
				
				<hr className="bd:1px-solid-gray mrg-b:16px"/>

				<div className="dp:flx w:33.33pc_vlgn:m_section p:10px_div">
					<section className="ta:l">
						<button className="bg:F57167 p:8px br:4px c:white"><FontAwesomeIcon icon={faBan}/> Fail Activation</button>
					</section>
					<section className="ta:c">
						<button className="bg:FF9F62 p:8px br:4px c:white"><FontAwesomeIcon icon={faPhone} color="white"/> Call to Confirm</button>
					</section>
					<section className="ta:r">
						<button className={"p:8px br:4px c:white" + (isDataValid ? " bg:8DBD61" : " bg:939393")} disabled={!isDataValid}><FontAwesomeIcon icon={faCheck} color="white"/> Verify User</button>
					</section>
				</div>
				
			</div>
		)
	}
}

export default KYC