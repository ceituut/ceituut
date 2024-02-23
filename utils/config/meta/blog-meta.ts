import {
  Properties,
  PropertyType,
} from "utils/schema/properties/property-type";
import IBlogData from "./blog-data";

const blogMeta: Properties<IBlogData> = {
  title: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  image: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  path: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  reference: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  slug: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  date: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  categories: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  description: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  writer: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
  format: {
    isSearchable: false,
    localName: "",
    type: PropertyType.Date,
    form: undefined,
  },
};

export default blogMeta;