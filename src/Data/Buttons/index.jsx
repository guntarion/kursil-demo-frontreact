import { ActiveButtons, Add, BootstrapStateButtons, DangerButton, DefaultButtons, DisabledButtons, DisabledOutlineButtons, ExtraSmallButtons, GradienButtons, InfoButton, LargeButtons, LightButton, OutlineButtons, OutlineExtraSmallButtons, OutlineLargeButtons, OutlineSmallButtons, PrimaryButton, RadioButtonGroup, SecondaryButton, SmallButtons, SuccessButton, WarningButton } from '../../Constant';

export const DefaultButtonData = [
    {
        title: DefaultButtons,
        span: BootstrapStateButtons,
        btnSub: [
            {
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                colorClass: 'info',
                title: InfoButton,
            },
            {
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: LargeButtons,
        span: Add,
        code: '.btn-lg',
        detail: 'class for large size buttons',
        cardId: 'large-btn',
        btnSub: [
            {
                size: 'lg',
                colorClass: 'primary',
                title: PrimaryButton
            },
            {
                size: 'lg',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'lg',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'lg',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'lg',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'lg',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: SmallButtons,
        span: Add,
        code: '.btn-sm',
        detail: 'class for small size buttons',
        cardId: 'small-btn',
        btnSub: [
            {
                size: 'sm',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'sm',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'sm',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'sm',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'sm',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'sm',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'sm',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: ExtraSmallButtons,
        span: Add,
        code: '.btn-xs',
        detail: 'class for extra small size buttons',
        cardId: 'ex-small-btn',
        btnSub: [
            {
                size: 'xs',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'xs',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'xs',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'xs',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'xs',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'xs',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'xs',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: ActiveButtons,
        span: Add,
        code: '.active',
        detail: 'class for active state',
        cardId: 'active-btn',
        btnSub: [
            {
                active: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                active: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                active: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                active: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                active: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                active: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                active: true,
                colorClass: 'light txt-dark',
                title: LightButton,
            },
        ]
    },
    {
        title: DisabledButtons,
        span: Add,
        code: `.disabled class or disabled='disabled'`,
        detail: 'attribute for disabled button',
        cardId: 'disabled-btn',
        btnSub: [
            {
                disabled: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                disabled: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                disabled: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                disabled: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                disabled: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                disabled: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                disabled: true,
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: OutlineButtons,
        span: Add,
        code1: `.btn-outline-*`,
        detail1: 'class for border button',
        cardId: 'outline-button',
        btnSub: [
            {
                outline: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                outline: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                outline: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                outline: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                outline: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                outline: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                outline: true,
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: OutlineLargeButtons,
        span: Add,
        code1: `.btn-outline-*`,
        detail1: 'class for outline and',
        code2: '.btn-lg',
        detail2: 'class for large button',
        cardId: 'outline-bold-button',
        btnSub: [
            {
                size: 'lg',
                outline: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'lg',
                outline: true,
                colorClass: 'light',
                title: LightButton,
            }
        ]
    },
    {
        title: OutlineSmallButtons,
        span: Add,
        code1: `.btn-outline-*`,
        detail1: 'class for outline and',
        code2: '.btn-sm',
        detail2: 'class for small button',
        cardId: 'outline-small-button',
        btnSub: [
            {
                size: 'sm',
                outline: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'sm',
                outline: true,
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: OutlineExtraSmallButtons,
        span: Add,
        code1: `.btn-outline-*`,
        detail1: 'class for outline and',
        code2: '.btn-xs',
        detail2: 'class for extra small button',
        cardId: 'ex-outline-small-button',
        btnSub: [
            {
                size: 'xs',
                outline: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'xs',
                outline: true,
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
    {
        title: DisabledOutlineButtons,
        span: Add,
        code1: `.disabled`,
        detail1: 'class or',
        code2: `disabled='disabled'}`,
        detail2: 'attribute for disabled state',
        cardId: 'ex-outline-small-button',
        btnSub: [
            {
                size: 'xs',
                outline: true,
                disabled: true,
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                size: 'xs',
                outline: true,
                disabled: true,
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                size: 'xs',
                outline: true,
                disabled: true,
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                size: 'xs',
                outline: true,
                disabled: true,
                colorClass: 'info',
                title: InfoButton,
            },
            {
                size: 'xs',
                outline: true,
                disabled: true,
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                size: 'xs',
                outline: true,
                disabled: true,
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                size: 'xs',
                outline: true,
                disabled: true,
                colorClass: 'light txt-dark',
                title: LightButton,
            },
        ]
    },
    {
        title: GradienButtons,
        span: Add,
        code1: `.btn-*-gradien`,
        detail1: 'class for gradien button',
        cardId: 'gradiant',
        btnSub: [
            {
                colorClass: 'primary-gradien',
                title: PrimaryButton,
            },
            {

                colorClass: 'secondary-gradien',
                title: SecondaryButton,
            },
            {
                colorClass: 'success-gradien',
                title: SuccessButton,
            },
            {
                colorClass: 'info-gradien',
                title: InfoButton,
            },
            {
                colorClass: 'warning-gradien',
                title: WarningButton,
            },
            {
                colorClass: 'danger-gradien',
                title: DangerButton,
            },
            {
                colorClass: 'light-gradien txt-dark',
                title: LightButton,
            }
        ]
    },
];


export const EdgeButtonData = [
    {
        title: 'Edge Button',
        span: 'Add',
        code: `.btn-pill`,
        detail: 'class for edge button',
        btnSub: [
            {
                btnClass: 'btn-pill',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                btnClass: 'btn-pill',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                btnClass: 'btn-pill',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                btnClass: 'btn-pill',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                btnClass: 'btn-pill',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                btnClass: 'btn-pill',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                btnClass: 'btn-pill',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    },
];

export const FlatButtonData = [
    {
        title: 'Flat Button',
        span: 'Add',
        code: `.btn-square`,
        detail: 'class for edge button',
        btnSub: [
            {
                btnClass: 'btn-square',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                btnClass: 'btn-square',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                btnClass: 'btn-square',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                btnClass: 'btn-square',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                btnClass: 'btn-square',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                btnClass: 'btn-square',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                btnClass: 'btn-square',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    }
];

export const GroupBtnData = [
    {
        title: 'Button Group',
        color: [
            {
                colorClass: 'primary',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'secondary',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'success',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'info',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'warning',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'danger',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colorClass: 'light',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            },
            {
                colClass: 'Button-group-mb-sm',
                colorClass: 'dark',
                title1: 'Left',
                title2: 'Middle',
                title3: 'Right'
            }
        ]
    },
];

export const RadioBtnData = [
    {
        title: RadioButtonGroup,
        span: Add,
        code1: '.active',
        detail1: 'for active state and',
        code2: '.disabled',
        detail2: 'class or',
        code3: `disabled='disabled'`,
        detail3: 'attribute',
        btnSub: [
            {
                btnClass: 'btn-radio',
                colorClass: 'primary',
                divClass: 'radio radio-primary',
                id1: 'radio7',
                title1: 'Option 1',
                id2: 'radio8',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'secondary',
                divClass: 'radio radio-secondary',
                id1: 'radio11',
                title1: 'Option 1',
                id2: 'radio12',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'success',
                divClass: 'radio radio-success',
                id1: 'radio13',
                title1: 'Option 1',
                id2: 'radio14',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'info',
                divClass: 'radio radio-info',
                id1: 'radio15',
                title1: 'Option 1',
                id2: 'radio16',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'warning',
                divClass: 'radio radio-warning',
                id1: 'radio17',
                title1: 'Option 1',
                id2: 'radio18',
                title2: 'Option 2',
            },
            {
                btnClass: 'btn-radio',
                colorClass: 'danger',
                divClass: 'radio radio-danger',
                id1: 'radio20',
                title1: 'Option 1',
                id2: 'radio22',
                title2: 'Option 2',
            },
            {
                colClass: 'button-group-mb-sm xl-50',
                btnClass: 'btn-radio',
                colorClass: 'light txt-dark',
                divClass: 'radio radio-light',
                id1: 'radio23',
                title1: 'Option 1',
                id2: 'radio24',
                title2: 'Option 2',
            }
        ]
    }
];

export const RaisedButtonData = [
    {
        title: 'Raised Buttons',
        span: 'Add',
        code: `.btn-pill & .btn-air-*`,
        detail: 'class  for raised button',
        btnSub: [
            {
                btnClass: 'btn-pill btn-air-primary',
                colorClass: 'primary',
                title: PrimaryButton,
            },
            {
                btnClass: 'btn-pill btn-air-primary',
                colorClass: 'secondary',
                title: SecondaryButton,
            },
            {
                btnClass: 'btn-pill btn-air-primary',
                colorClass: 'success',
                title: SuccessButton,
            },
            {
                btnClass: 'btn-pill btn-air-primary',
                colorClass: 'info',
                title: InfoButton,
            },
            {
                btnClass: 'btn-pill btn-air-primary',
                colorClass: 'warning',
                title: WarningButton,
            },
            {
                btnClass: 'btn-pill btn-air-primary',
                colorClass: 'danger',
                title: DangerButton,
            },
            {
                btnClass: 'btn-pill btn-air-primary',
                colorClass: 'light',
                title: LightButton,
            },
        ]
    }
];
