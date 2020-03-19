import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
  <div className='collection-page'></div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.math.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);