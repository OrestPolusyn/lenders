import type { CSSProperties, FunctionComponent } from 'react'
import { useMemo } from 'react'

import styles from './index.module.css'

export type FrameComponentType = {
  className?: string
  realTimeCollaborationAutomatio?: string
  intelligentDataManagementRepor?: string
  seamlessIntegrationsWithPopular?: string

  /** Style props */
  frameDivFlexDirection?: CSSProperties['flexDirection']
  frameDivAlignItems?: CSSProperties['alignItems']
  frameDivFlexDirection1?: CSSProperties['flexDirection']
  rectangleDivFlex?: CSSProperties['flex']
  rectangleDivAlignSelf?: CSSProperties['alignSelf']
  frameDivMinWidth?: CSSProperties['minWidth']
  realTimeCollaborationFlex?: CSSProperties['flex']
  realTimeCollaborationMinWidth?: CSSProperties['minWidth']
  realTimeCollaborationWidth?: CSSProperties['width']
  frameDivMinWidth1?: CSSProperties['minWidth']
}

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = '',
  frameDivFlexDirection,
  frameDivAlignItems,
  frameDivFlexDirection1,
  rectangleDivFlex,
  rectangleDivAlignSelf,
  frameDivMinWidth,
  realTimeCollaborationAutomatio,
  realTimeCollaborationFlex,
  realTimeCollaborationMinWidth,
  realTimeCollaborationWidth,
  frameDivMinWidth1,
  intelligentDataManagementRepor,
  seamlessIntegrationsWithPopular,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection,
      alignItems: frameDivAlignItems,
    }
  }, [frameDivFlexDirection, frameDivAlignItems])

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection1,
    }
  }, [frameDivFlexDirection1])

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: rectangleDivFlex,
      alignSelf: rectangleDivAlignSelf,
    }
  }, [rectangleDivFlex, rectangleDivAlignSelf])

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    }
  }, [frameDivMinWidth])

  const realTimeCollaborationStyle: CSSProperties = useMemo(() => {
    return {
      flex: realTimeCollaborationFlex,
      minWidth: realTimeCollaborationMinWidth,
      width: realTimeCollaborationWidth,
    }
  }, [
    realTimeCollaborationFlex,
    realTimeCollaborationMinWidth,
    realTimeCollaborationWidth,
  ])

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth1,
    }
  }, [frameDivMinWidth1])

  return (
    <div className={[styles.frameParent, className].join(' ')}>
      <div className={styles.frameGroup} style={frameDivStyle}>
        <div className={styles.rectangleWrapper} style={frameDiv1Style}>
          <div className={styles.frameChild} style={rectangleDivStyle} />
        </div>
        <div className={styles.ellipseParent} style={frameDiv2Style}>
          <div className={styles.frameItem} />
          <div
            className={styles.realTimeCollaboration}
            style={realTimeCollaborationStyle}
          >
            {realTimeCollaborationAutomatio}
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.ellipseParent} style={frameDiv3Style}>
          <div className={styles.frameItem} />
          <div className={styles.intelligentDataManagement}>
            {intelligentDataManagementRepor}
          </div>
        </div>
      </div>
      {seamlessIntegrationsWithPopular && (
        <div className={styles.frameContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.frameItem} />
            <div className={styles.intelligentDataManagement}>
              {seamlessIntegrationsWithPopular}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FrameComponent
