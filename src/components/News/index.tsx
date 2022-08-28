import React from 'react';
import { INews } from '../../interfaces/components/INews';
import { Options } from '../../interfaces/components/ISelect';
import { TabType } from '../../interfaces/components/ITab';
import NewsComponent from '../NewsComponent';
import PaginationComponent from '../PaginationComponent';
import SelectComponent from '../SelectComponent';
import './styles.css';
import useNews from './useNews';

const News: React.FC<INews> = ({ type, hits }) => {
    const { options, onChangePagination, current8Items, onChangeSelect, search } = useNews(hits);

    return (
        <div>
            <div>
                {type === TabType.ALL && <SelectComponent placeholder='Select your news' defaultValue={search.newsType ? search.newsType : Options.ANGULAR} onChange={onChangeSelect} options={options} />}
            </div>
            <div className="hits-body">
                <div className="row">
                    <div className="column-left">
                        {hits && (
                            current8Items.slice(0, 4).map(hit => (
                                <div key={`key-${hit.objectID}`}>
                                    <NewsComponent {...hit} />
                                </div>
                            ))
                        )}
                    </div>
                    <div className="column-right">
                        {hits && (
                            current8Items.slice(4, 8).map(hit => (
                                <div key={`key-${hit.objectID}`}>
                                    <NewsComponent {...hit} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div className="pagination">
                <PaginationComponent onChange={onChangePagination} itemsCount={!hits ? 0 : Math.ceil(hits.length / 8)} />
            </div>
        </div>
    )
}

export default React.memo(News);