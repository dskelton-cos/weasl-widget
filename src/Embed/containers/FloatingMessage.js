import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FloatingMessage from 'components/FloatingMessage';
import * as UISelectors from 'modules/ui/selectors';
import * as UIActions from 'modules/ui/actions';
import * as ShimSelectors from 'modules/shim/selectors';

const mapStateToProps = state => ({
  infoMsgSuccess: UISelectors.infoMsgSuccess(state),
  infoMsgPending: UISelectors.infoMsgPending(state),
  infoMsgFailed: UISelectors.infoMsgFailed(state),
  uiType: UISelectors.uiType(state),
  lastSentContainerClass: UISelectors.lastSentContainerClass(state),
  verifyDomainFailed: ShimSelectors.domainVerificationFailed(state) && ShimSelectors.domainVerificationIsDone(state),
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    changeContainerClass: UIActions.changeContainerClass,
  }, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(FloatingMessage);