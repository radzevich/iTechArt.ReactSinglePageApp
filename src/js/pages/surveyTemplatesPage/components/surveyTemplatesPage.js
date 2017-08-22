import React, { Component } from 'react';
import PageHeader from '../../common/components/pageHeader';
import TemplateItem from '../components/templateItem';

class SurveyTemplatesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedItemIndex: null};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(clickedItemIndex) {
		this.setState({selectedItemIndex: clickedItemIndex});
	}

	render() {
		// const templateItems = this.props.templateItems.slice();
		// TEST
		const templateItems = [ 
			{
				title: "Шаблон 1",
				info: {
					questionsCount: 12,
					pagesCount: 3,
				},
				description: "Jevakiro puso od ia javai i wilekud u saxuhaf piteji aeyfexy xiw ukemydi t egiwyn dujimyb cyjosyce bemovad zuholefu - jueu e j idioguho. Uk jyxelyxus. N bikiise, ceryt pinoseme jyj za nowaumu lefy honapiteq uio woufiky rypi. Tahanocuj y i xovehejy macotayry tyh xoa g, qazagomem - g qy iqyzucy viidacuhe kuxo yufufez pigiam obyw li s haiurydak c. Joq pigacoe xa fahukur bociso",
			},
			{
				title: "Шаблон 2",
				info: {
					questionsCount: 15,
					pagesCount: 4,
				},
				description: "Axahonu pal kanijihev axinol wiyg fyihoboy ulogoo lala tetoz vipeyiwu hi byyri q e bafi r quxute bol isihelah umyhazij wyejoy eliwa moxojus. Lo - kup kinaw ze, juao n gu fisim aecipyjoa - vu erat yveagiam pikow vapu ycipop gunaza s, ty syaqy baxuixijo gielikiry. Toqajega my neyryhufo vopituiv cacemax afenujyi. Uq cyrixalax wip. O zimyu v dewaliw luf vuy onii dupatuvev xirytuzul bytybuso joaqira cyvuwuba by mexoorif ted fupy y saej euzobim syb w - jemevoco ynouup m. Acewevah volytoq ?",
			},
			{
				title: "Шаблон 3",
				info: {
					questionsCount: 10,
					pagesCount: 2,
				},			
				description: " Zadeaib vyvexal kipo tyziyeho faotywo ubitau kurozoeta t ho v faviaxa yza mebovuz cocym - sefumu vic famiowoe veeqe hoy v ep.  Isowyyna aaxyfi iner sirogu sup piibej gew - le ygaigyw tu ocely wa liwumeoc qiur - yfazuhiom xuqenu zuwoej caduvas jacike jir cilixyve. Ybi ciwuhiwe taam doiumej axuvab uzyub jyeeymiu yajef xukeny sida - xetydepu pidesy myookyvyd vodehove laq mer nugyvyz. Rakinuo muys mezaqoji vy e, ciaf bulyt - xiabypij",				
			},
		];		

		return (			
			<div className="page page_content_survey-templates">
				<PageHeader pageTitle="Шаблоны"
							buttonText="Новый шаблон"/>
				{templateItems.map((item, index) =>
					<TemplateItem title={item.title}
								  info={item.info}	
								  isSelected={this.state.selectedItemIndex === index ? true : false}
								  onClick={() => this.handleClick(index)}
								  description={item.description}
								  key={index} />
				)}
			</div>
		);
	}
}

export default SurveyTemplatesPage