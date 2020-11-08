class ParseResume {
  constructor(rawPdfData) {
    this.rawPdfData = rawPdfData;
    this.sections = this.rawPdfData.split('ᅳ');
    this.personalInfo = this.sections[0];
    this.sections = this.sections.slice(1);
    this.sectionsFormat = [];
  }

  getPersonalInfo() {
    return this.personalInfo.split(/\s\n|\n/m).splice(2, 5);
  }

  getSections() {
    return this.sectionsFormat;
  }

  parseSubsectionData(subsection) {
    let name = subsection[0];
    let info = null;
    if (name.includes('Portfolio') || name.includes('Expected'))
      return null;
    
    let detailsList = [];
    let itemsList = [];

    subsection.splice(1).forEach(elem => {
      if (elem.includes('-'))
        info = elem;
      else if (elem.includes('●'))
        detailsList.push(elem.substring(1));
      else
        itemsList.push(elem);
    });

    let items = (itemsList.length > 0) ? itemsList.reduce((prev, cur) => prev + " " + cur) : null;
    let details = (detailsList.length > 0) ? detailsList : null;
    return { name, info, items, details };
  }

  parseSubsections(sectionName, subsectionList) {
    let subsections = [];
    let subsection = [];

    subsectionList.forEach((item, i) => {
      if (item == '' || item == ' ' || i == subsectionList.length - 1) {
        if (subsection.length != 0) {
          let res = this.parseSubsectionData(subsection);
          if (res)
            subsections.push(res);
          subsection = [];
        }
      } else
        subsection.push(item);
    });
    return { name: sectionName, data: subsections };
  }

  parse() {
    this.sections.forEach(section => {
      let sectionList = section.split(/\s\n/m);
      const sectionName = sectionList[1];
      let subsectionList = sectionList.splice(2);
      this.sectionsFormat.push(this.parseSubsections(sectionName, subsectionList));
    });
  }
}

export default ParseResume;