/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @classdesc
    * IHashObject是哈希对象接口。引擎内所有接口的基类,为对象实例提供唯一的hashCode值,提高对象比较的性能。
    * 注意：自定义对象请直接继承HashObject，而不是实现此接口。否则会导致hashCode不唯一。
    * @interface
    * @class egret.IHashObject
    */
    interface IHashObject {
        /**
        * 返回此对象唯一的哈希值,用于唯一确定一个对象。hashCode为大于等于1的整数。
        * @member {number} egret.IHashObject#hashCode
        */
        hashCode: number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/**
* @namespace egret
*/
declare module egret {
    /**
    * @class egret.HashObject
    * @classdesc
    * @implements egret.IHashObject
    */
    class HashObject implements IHashObject {
        /**
        * @method egret.HashObject#constructor
        * @class egret.HashObject
        * @classdesc 哈希对象。引擎内所有对象的基类，为对象实例提供唯一的hashCode值,提高对象比较的性能。
        */
        constructor();
        /**
        * 哈希计数
        */
        private static hashCount;
        private _hashCode;
        /**
        * 返回此对象唯一的哈希值,用于唯一确定一个对象。hashCode为大于等于1的整数。
        * @member {number} egret.HashObject#hashCode
        */
        public hashCode : number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * 对象缓存复用工具类，可用于构建对象池，一段时间后会自动回收对象。
    */
    class Recycler extends HashObject {
        constructor(autoDisposeTime?: number);
        static _callBackList: any[];
        /**
        * 多少帧后自动销毁对象。
        */
        private autoDisposeTime;
        private frameCount;
        public _checkFrame(): void;
        private objectPool;
        private _length;
        /**
        * 缓存的对象数量
        */
        public length : number;
        /**
        * 缓存一个对象以复用
        * @param object
        */
        public push(object: any): void;
        /**
        * 获取一个缓存的对象
        */
        public pop(): any;
        /**
        * 立即清空所有缓存的对象。
        */
        public dispose(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    var __START_TIME: number;
    /**
    * 用于计算相对时间。此方法返回自启动 Egret 引擎以来经过的毫秒数。
    */
    function getTimer(): number;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    var __callLaterFunctionList: any[];
    var __callLaterThisList: any[];
    var __callLaterArgsList: any[];
    /**
    * 延迟函数到屏幕重绘前执行。
    * @param method 要延迟执行的函数
    * @param thisObject 回调函数的this引用
    * @param args 函数参数列表
    */
    function callLater(method: Function, thisObject: any, ...args: any[]): void;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class Event extends HashObject {
        /**
        * @class egret.Event
        * @classdesc
        * Event 类作为创建 Event 对象的基类，当发生事件时，Event 对象将作为参数传递给事件侦听器。
        *
        * Event 类的属性包含有关事件的基本信息，例如事件的类型或者是否可以取消事件的默认行为。
        *
        * 对于许多事件（如由 Event 类常量表示的事件），此基本信息就足够了。但其他事件可能需要更详细的信息。
        * 例如，与触摸关联的事件需要包括有关触摸事件的位置以及在触摸事件期间是否按下了任何键的其他信息。
        * 您可以通过扩展 Event 类（TouchEvent 类执行的操作）将此类其他信息传递给事件侦听器。
        * Egret API 为需要其他信息的常见事件定义多个 Event 子类。与每个 Event 子类关联的事件将在每个类的文档中加以介绍。
        *
        * Event 类的方法可以在事件侦听器函数中使用以影响事件对象的行为。
        * 某些事件有关联的默认行为，通过调用 preventDefault() 方法，您的事件侦听器可以取消此行为。
        * 可以通过调用 stopPropagation() 或 stopImmediatePropagation() 方法，将当前事件侦听器作为处理事件的最后一个事件侦听器。
        * @param {string} type 事件的类型，可以作为 Event.type 访问。
        * @param bubbles{boolean} 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
        * @param cancelable{boolean} 确定是否可以取消 Event 对象。默认值为 false。
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
        * 在将显示对象直接添加到舞台显示列表或将包含显示对象的子树添加至舞台显示列表中时调度。
        * 以下方法会触发此事件：DisplayObjectContainer.addChild()、DisplayObjectContainer.addChildAt()。
        * @constant {string} egret.Event.ADDED_TO_STAGE
        */
        static ADDED_TO_STAGE: string;
        /**
        * 在从显示列表中直接删除显示对象或删除包含显示对象的子树时调度。DisplayObjectContainer 类的以下两个方法会生成此事件：removeChild() 和 removeChildAt()。
        * 如果必须删除某个对象来为新对象提供空间，则 DisplayObjectContainer 对象的下列方法也会生成此事件：addChild()、addChildAt() 和 setChildIndex()。
        * @constant {string} egret.Event.REMOVED_FROM_STAGE
        */
        static REMOVED_FROM_STAGE: string;
        /**
        * 将显示对象添加到显示列表中时调度。以下方法会触发此事件：
        * DisplayObjectContainer.addChild()、DisplayObjectContainer.addChildAt()。
        * @constant {string} egret.Event.ADDED
        */
        static ADDED: string;
        /**
        * 将要从显示列表中删除显示对象时调度。DisplayObjectContainer 类的以下两个方法会生成此事件：removeChild() 和 removeChildAt()。
        * 如果必须删除某个对象来为新对象提供空间，则 DisplayObjectContainer 对象的下列方法也会生成此事件：addChild()、addChildAt() 和 setChildIndex()。
        * @constant {string} egret.Event.REMOVED
        */
        static REMOVED: string;
        /**
        * 完成
        * @constant {string} egret.Event.COMPLETE
        */
        static COMPLETE: string;
        /**
        * 主循环：进入新的一帧
        * @constant {string} egret.Event.ENTER_FRAME
        */
        static ENTER_FRAME: string;
        /**
        * 主循环：开始渲染
        * @constant {string} egret.Event.RENDER
        */
        static RENDER: string;
        /**
        * 主循环：渲染完毕
        * @constant {string} egret.Event.FINISH_RENDER
        */
        static FINISH_RENDER: string;
        /**
        * 主循环：updateTransform完毕
        * @constant {string} egret.Event.FINISH_UPDATE_TRANSFORM
        */
        static FINISH_UPDATE_TRANSFORM: string;
        /**
        * 离开舞台，参考Flash的Event.MOUSE_LEAVE
        * @constant {string} egret.Event.LEAVE_STAGE
        */
        static LEAVE_STAGE: string;
        /**
        * 舞台尺寸发生改变
        * @constant {string} egret.Event.RESIZE
        */
        static RESIZE: string;
        /**
        * 状态改变
        * @constant {string} egret.Event.CHANGE
        */
        static CHANGE: string;
        public data: any;
        public _type: string;
        /**
        * 事件的类型。类型区分大小写。
        * @member {string} egret.Event#type
        */
        public type : string;
        public _bubbles: boolean;
        /**
        * 表示事件是否为冒泡事件。如果事件可以冒泡，则此值为 true；否则为 false。
        * @member {boolean} egret.Event#bubbles
        */
        public bubbles : boolean;
        private _cancelable;
        /**
        * 表示是否可以阻止与事件相关联的行为。如果可以取消该行为，则此值为 true；否则为 false。
        * @member {boolean} egret.Event#cancelable
        */
        public cancelable : boolean;
        public _eventPhase: number;
        /**
        * 事件流中的当前阶段。此属性可以包含以下数值：
        * 捕获阶段 (EventPhase.CAPTURING_PHASE)。
        * 目标阶段 (EventPhase.AT_TARGET)。
        * 冒泡阶段 (EventPhase.BUBBLING_PHASE)。
        * @member {boolean} egret.Event#eventPhase
        */
        public eventPhase : number;
        private _currentTarget;
        /**
        * 当前正在使用某个事件侦听器处理 Event 对象的对象。例如，如果用户单击“确定”按钮，
        * 则当前目标可以是包含该按钮的节点，也可以是它的已为该事件注册了事件侦听器的始祖之一。
        * @member {any} egret.Event#currentTarget
        */
        public currentTarget : any;
        public _setCurrentTarget(target: any): void;
        public _target: any;
        /**
        * 事件目标。此属性包含目标节点。例如，如果用户单击“确定”按钮，则目标节点就是包含该按钮的显示列表节点。
        * @member {any} egret.Event#target
        */
        public target : any;
        public _isDefaultPrevented: boolean;
        /**
        * 检查是否已对事件调用 preventDefault() 方法。
        * @method egret.Event#isDefaultPrevented
        * @returns {boolean} 如果已调用 preventDefault() 方法，则返回 true；否则返回 false。
        */
        public isDefaultPrevented(): boolean;
        /**
        * 如果可以取消事件的默认行为，则取消该行为。
        * 许多事件都有默认执行的关联行为。例如，如果用户在文本字段中键入一个字符，则默认行为就是在文本字段中显示该字符。
        * 由于可以取消 TextEvent.TEXT_INPUT 事件的默认行为，因此您可以使用 preventDefault() 方法来防止显示该字符。
        * 注意：当cancelable属性为false时，此方法不可用。
        * @method egret.Event#preventDefault
        */
        public preventDefault(): void;
        public _isPropagationStopped: boolean;
        /**
        * 防止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget) 中的任何事件侦听器。
        * 相比之下，stopImmediatePropagation() 方法可以防止对当前节点中和后续节点中的事件侦听器进行处理。
        * 对此方法的其它调用没有任何效果。可以在事件流的任何阶段中调用此方法。
        * 注意：此方法不会取消与此事件相关联的行为；有关此功能的信息，请参阅 preventDefault()。
        * @method egret.Event#stopPropagation
        */
        public stopPropagation(): void;
        public _isPropagationImmediateStopped: boolean;
        /**
        * 防止对事件流中当前节点中和所有后续节点中的事件侦听器进行处理。此方法会立即生效，并且会影响当前节点中的事件侦听器。
        * 相比之下，在当前节点中的所有事件侦听器都完成处理之前，stopPropagation() 方法不会生效。
        * 注意：此方法不会取消与此事件相关联的行为；有关此功能的信息，请参阅 preventDefault()。
        * @method egret.Event#stopImmediatePropagation
        */
        public stopImmediatePropagation(): void;
        private isNew;
        public _reset(): void;
        static _dispatchByTarget(EventClass: any, target: IEventDispatcher, type: string, props?: Object, bubbles?: boolean, cancelable?: boolean): boolean;
        static _getPropertyData(EventClass: any): any;
        /**
        * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.Event.dispatchEvent
        */
        static dispatchEvent(target: IEventDispatcher, type: string, bubbles?: boolean, data?: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.IOErrorEvent
    * @classdesc IO流事件，当错误导致输入或输出操作失败时调度 IOErrorEvent 对象。
    * @extends egret.Event
    */
    class IOErrorEvent extends Event {
        /**
        * @constant {string} egret.IOErrorEvent.IO_ERROR
        */
        static IO_ERROR: string;
        /**
        * @method egret.IOErrorEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
        * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.IOErrorEvent.dispatchIOErrorEvent
        * @param target {egret.IEventDispatcher}
        */
        static dispatchIOErrorEvent(target: IEventDispatcher): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class TouchEvent extends Event {
        /**
        * 创建一个作为参数传递给事件侦听器的 Event 对象。
        *
        * @class egret.TouchEvent
        * @classdesc
        * TouchEvent事件类
        * @extends egret.Event
        * @constructor egret.TouchEvent
        * @param type {string} 事件的类型，可以作为 Event.type 访问。
        * @param bubbles {boolean} 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
        * @param cancelable {boolean} 确定是否可以取消 Event 对象。默认值为 false。
        * @param touchPointID {number}
        * @param stageX {number}
        * @param stageY {number}
        * @param ctrlKey {boolean}
        * @param altKey {boolean}
        * @param shiftKey {boolean}
        * @param touchDown {boolean}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, touchPointID?: number, stageX?: number, stageY?: number, ctrlKey?: boolean, altKey?: boolean, shiftKey?: boolean, touchDown?: boolean);
        /**
        * 轻触，参考Flash的MouseEvent.CLICK
        * @constant {string} egret.TouchEvent.TOUCH_TAP
        */
        static TOUCH_TAP: string;
        /**
        * 移动，参考FLash的MouseEvent.MOVE
        * @constant {string} egret.TouchEvent.TOUCH_MOVE
        */
        static TOUCH_MOVE: string;
        /**
        * 开始触摸,参考Flash的MouseEvent.MOUSE_DOWN
        * @constant {string} egret.TouchEvent.TOUCH_BEGIN
        */
        static TOUCH_BEGIN: string;
        /**
        * 在同一对象上结束触摸,参考Flash的MouseEvent.MOUSE_UP
        * @constant {string} egret.TouchEvent.TOUCH_END
        */
        static TOUCH_END: string;
        /**
        * 在对象外部结束触摸，参考Flash的MouseEvent.RELEASE_OUTSIDE
        * @constant {string} egret.TouchEvent.TOUCH_RELEASE_OUTSIDE
        */
        static TOUCH_RELEASE_OUTSIDE: string;
        /**
        * 移动，参考FLash的MouseEvent.MOVE
        * @member egret.TouchEvent.TOUCH_MOVE
        * @constant {string} egret.TouchEvent.TOUCH_ROLL_OUT
        */
        static TOUCH_ROLL_OUT: string;
        /**
        * 移动，参考FLash的MouseEvent.MOVE
        * @member egret.TouchEvent.TOUCH_MOVE
        * @constant {string} egret.TouchEvent.TOUCH_ROLL_OVER
        */
        static TOUCH_ROLL_OVER: string;
        /**
        * 移动，参考FLash的MouseEvent.MOVE
        * @constant {string} egret.TouchEvent.TOUCH_OUT
        */
        static TOUCH_OUT: string;
        /**
        * 移动，参考FLash的MouseEvent.MOVE
        * @member egret.TouchEvent.TOUCH_MOVE
        * @constant {string} egret.TouchEvent.TOUCH_OVER
        */
        static TOUCH_OVER: string;
        public _stageX: number;
        /**
        * 事件发生点在全局舞台坐标中的水平坐标。
        * @member {number} egret.TouchEvent#stageX
        */
        public stageX : number;
        public _stageY: number;
        /**
        * 事件发生点在全局舞台坐标中的垂直坐标。
        * @member {number} egret.TouchEvent#stageY
        */
        public stageY : number;
        private _localX;
        /**
        * 事件发生点相对于currentTarget的水平坐标。
        * @member {number} egret.TouchEvent#localX
        */
        public localX : number;
        private _localY;
        /**
        * 事件发生点相对于currentTarget的垂直坐标。
        * @member {number} egret.TouchEvent#localY
        */
        public localY : number;
        /**
        * 分配给触摸点的唯一标识号
        * @member {number} egret.TouchEvent#touchPointID
        */
        public touchPointID: number;
        /**
        * 事件发生时ctrl键是否被按下。 (Mac OS下为 Cmd 或 Ctrl)
        * @member {boolean} egret.TouchEvent#ctrlKey
        */
        public ctrlKey: boolean;
        /**
        * 事件发生时shift键是否被按下。
        * @member {boolean} egret.TouchEvent#shiftKey
        */
        public shiftKey: boolean;
        /**
        * 事件发生时alt键是否被按下。
        * @member {boolean} egret.TouchEvent#altKey
        */
        public altKey: boolean;
        /**
        * 表示触摸已按下 (true) 还是未按下 (false)。
        * @member {boolean} egret.TouchEvent#touchDown
        */
        public touchDown: boolean;
        public _setCurrentTarget(target: any): void;
        /**
        * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.TouchEvent.dispatchTouchEvent
        * @param target {egret.IEventDispatcher}
        * @param type {string}
        * @param touchPointID {number}
        * @param stageX {number}
        * @param stageY {number}
        * @param ctrlKey {boolean}
        * @param altKey {boolean}
        * @param shiftKey {boolean}
        * @param touchDown {boolean}
        */
        static dispatchTouchEvent(target: IEventDispatcher, type: string, touchPointID?: number, stageX?: number, stageY?: number, ctrlKey?: boolean, altKey?: boolean, shiftKey?: boolean, touchDown?: boolean): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/** @namespace egret */
declare module egret {
    /**
    * @class egret.TimerEvent
    * @classdesc
    * 每当 Timer 对象达到由 Timer.delay 属性指定的间隔时，Timer 对象即会调度 TimerEvent 对象。
    * @extends egret.Event
    */
    class TimerEvent extends Event {
        /**
        *
        * @constructor egret.TimerEvent
        * @param type {string} 事件的类型。事件侦听器可以通过继承的 type 属性访问此信息。
        * @param bubbles {boolean} 确定 Event 对象是否冒泡。事件侦听器可以通过继承的 bubbles 属性访问此信息。
        * @param cancelable {boolean} 确定是否可以取消 Event 对象。事件侦听器可以通过继承的 cancelable 属性访问此信息。
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
        * 每当 Timer 对象达到根据 Timer.delay 属性指定的间隔时调度。
        * @constant {string} egret.TimerEvent.TIMER
        */
        static TIMER: string;
        /**
        * 每当它完成 Timer.repeatCount 设置的请求数后调度。
        * @constant {string} egret.TimerEvent.TIMER_COMPLETE
        */
        static TIMER_COMPLETE: string;
        /**
        * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.TimerEvent.dispatchTimerEvent
        * @param target {egret.IEventDispatcher}
        * @param type {string}
        */
        static dispatchTimerEvent(target: IEventDispatcher, type: string): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.EventPhase
    * @classdesc
    * EventPhase 类可为 Event 类的 eventPhase 属性提供值。
    */
    class EventPhase {
        /**
        * 捕获阶段，是事件流的第一个阶段。
        * @constant {number} egret.EventPhase.CAPTURING_PHASE
        */
        static CAPTURING_PHASE: number;
        /**
        * 目标阶段，是事件流的第二个阶段。
        * @constant {number} egret.EventPhase.AT_TARGET
        */
        static AT_TARGET: number;
        /**
        * 冒泡阶段，是事件流的第三个阶段。
        * @constant {number} egret.EventPhase.BUBBLING_PHASE
        */
        static BUBBLING_PHASE: number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    *
    * @class egret.IEventDispatcher
    * @interface
    * @classdesc IEventDispatcher是egret的事件派发器接口，负责进行事件的发送和侦听。
    */
    interface IEventDispatcher extends IHashObject {
        /**
        * 添加事件侦听器
        * @param type 事件的类型。
        * @param listener 处理事件的侦听器函数。此函数必须接受 Event 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event):void 函数可以有任何名称。
        * @param thisObject 侦听函数绑定的this对象
        * @param useCapture 确定侦听器是运行于捕获阶段还是运行于目标和冒泡阶段。如果将 useCapture 设置为 true，
        * 则侦听器只在捕获阶段处理事件，而不在目标或冒泡阶段处理事件。如果 useCapture 为 false，则侦听器只在目标或冒泡阶段处理事件。
        * 要在所有三个阶段都侦听事件，请调用 addEventListener 两次：一次将 useCapture 设置为 true，一次将 useCapture 设置为 false。
        * @param  priority 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
        * @stable A
        */
        addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        /**
        * 移除事件侦听器
        * @param type 事件名
        * @param listener 侦听函数
        * @param thisObject 侦听函数绑定的this对象
        * @param useCapture 是否使用捕获，这个属性只在显示列表中生效。
        * @stable A
        */
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        /**
        * 检测是否存在监听器
        * @param type 事件名
        * @returns {*}
        * @stable A
        */
        hasEventListener(type: string): boolean;
        /**
        * 派发事件
        * @param type 事件名
        * @param arg 数据对象
        * @returns {*}
        */
        dispatchEvent(event: Event): boolean;
        /**
        * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了事件侦听器。将指定类型的事件调度给此
        * EventDispatcher 对象或其任一后代时，如果在事件流的任何阶段触发了事件侦听器，则此方法返回 true。
        * hasEventListener() 与 willTrigger() 方法的区别是：hasEventListener() 只检查它所属的对象，
        * 而 willTrigger() 方法检查整个事件流以查找由 type 参数指定的事件。
        * @param type 事件名
        */
        willTrigger(type: string): boolean;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    *
    * @class egret.EventDispatcher
    * @classdesc
    * EventDispatcher是egret的事件派发器类，负责进行事件的发送和侦听。
    * @extends egret.HashObject
    * @implements egret.IEventDispatcher
    *
    */
    class EventDispatcher extends HashObject implements IEventDispatcher {
        /**
        * EventDispatcher 类是可调度事件的所有类的基类。EventDispatcher 类实现 IEventDispatcher 接口
        * ，并且是 DisplayObject 类的基类。EventDispatcher 类允许显示列表上的任何对象都是一个事件目标，
        * 同样允许使用 IEventDispatcher 接口的方法。
        */
        constructor(target?: IEventDispatcher);
        /**
        * 事件抛出对象
        */
        private _eventTarget;
        /**
        * 引擎内部调用
        * @private
        */
        public _eventsMap: Object;
        /**
        * 引擎内部调用
        * @private
        */
        public _captureEventsMap: Object;
        /**
        * 添加事件侦听器
        * @method egret.EventDispatcher#addEventListener
        * @param type {string} 事件的类型。
        * @param listener {Function} 处理事件的侦听器函数。此函数必须接受 Event 对象作为其唯一的参数，并且不能返回任何结果，
        * 如下面的示例所示： function(evt:Event):void 函数可以有任何名称。
        * @param thisObject {any} 侦听函数绑定的this对象
        * @param useCapture {boolean} 确定侦听器是运行于捕获阶段还是运行于目标和冒泡阶段。如果将 useCapture 设置为 true，
        * 则侦听器只在捕获阶段处理事件，而不在目标或冒泡阶段处理事件。如果 useCapture 为 false，则侦听器只在目标或冒泡阶段处理事件。
        * 要在所有三个阶段都侦听事件，请调用 addEventListener 两次：一次将 useCapture 设置为 true，一次将 useCapture 设置为 false。
        * @param  priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
        * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
        */
        public addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        /**
        * 在一个事件列表中按优先级插入事件对象
        */
        public _insertEventBin(list: any[], listener: Function, thisObject: any, priority: number): boolean;
        /**
        * 移除事件侦听器
        * @method egret.EventDispatcher#removeEventListener
        * @param type {string} 事件名
        * @param listener {Function} 侦听函数
        * @param thisObject {any} 侦听函数绑定的this对象
        * @param useCapture {boolean} 是否使用捕获，这个属性只在显示列表中生效。
        */
        public removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        /**
        * 在一个事件列表中按优先级插入事件对象
        */
        public _removeEventBin(list: any[], listener: Function, thisObject: any): boolean;
        /**
        * 检测是否存在监听器
        * @method egret.EventDispatcher#hasEventListener
        * @param type {string} 事件类型
        * @returns {boolean}
        * @stable A
        */
        public hasEventListener(type: string): boolean;
        /**
        * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了事件侦听器。将指定类型的事件调度给此
        * EventDispatcher 对象或其任一后代时，如果在事件流的任何阶段触发了事件侦听器，则此方法返回 true。
        * hasEventListener() 与 willTrigger() 方法的区别是：hasEventListener() 只检查它所属的对象，
        * 而 willTrigger() 方法检查整个事件流以查找由 type 参数指定的事件。
        * @method egret.EventDispatcher#willTrigger
        * @param type {string} 事件类型
        * @returns {boolean} 是否发生碰撞，如果发生返回true，如果没有碰撞，返回false
        */
        public willTrigger(type: string): boolean;
        /**
        * 将事件分派到事件流中。事件目标是对其调用 dispatchEvent() 方法的 EventDispatcher 对象。
        * @method egret.EventDispatcher#dispatchEvent
        * @param event {egret.Event} 调度到事件流中的 Event 对象。如果正在重新分派事件，则会自动创建此事件的一个克隆。 在调度了事件后，其 _eventTarget 属性将无法更改，因此您必须创建此事件的一个新副本以能够重新调度。
        * @returns {boolean} 如果成功调度了事件，则值为 true。值 false 表示失败或对事件调用了 preventDefault()。
        */
        public dispatchEvent(event: Event): boolean;
        public _notifyListener(event: Event): boolean;
        /**
        * 派发一个包含了特定参数的事件到所有注册了特定类型侦听器的对象中。 这个方法使用了一个内部的事件对象池因避免重复的分配导致的额外开销。
        * @method egret.EventDispatcher#dispatchEventWith
        * @param type {string} 事件类型
        * @param bubbles {boolean} 是否冒泡，默认false
        * @param data {any}附加数据(可选)
        */
        public dispatchEventWith(type: string, bubbles?: boolean, data?: Object): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.MainContext
    * @classdesc
    * MainContext是游戏的核心跨平台接口，组合了多个功能Context，并是游戏启动的主入口
    * @extends egret.EventDispatcher
    */
    class MainContext extends EventDispatcher {
        constructor();
        /**
        * 渲染Context
        * @member egret.MainContext#rendererContext
        */
        public rendererContext: RendererContext;
        /**
        * 触摸Context
        * @member egret.MainContext#touchContext
        */
        public touchContext: TouchContext;
        /**
        * 网络Context
        * @member egret.MainContext#netContext
        */
        public netContext: NetContext;
        /**
        * 设备divice
        * @member egret.MainContext#deviceContext
        */
        public deviceContext: DeviceContext;
        /**
        * 舞台
        * @member egret.MainContext#stage
        */
        public stage: Stage;
        static deviceType: string;
        static DEVICE_PC: string;
        static DEVICE_MOBILE: string;
        /**
        * 游戏启动，开启主循环，参考Flash的滑动跑道模型
        * @method egret.MainContext#run
        */
        public run(): void;
        /**
        * 滑动跑道模型，渲染部分
        */
        private renderLoop(frameTime);
        private reuseEvent;
        /**
        * 广播EnterFrame事件。
        */
        private broadcastEnterFrame(frameTime);
        /**
        * 广播Render事件。
        */
        private broadcastRender();
        /**
        * 执行callLater回调函数列表
        */
        private doCallLaterList(funcList, thisList, argsList);
        /**
        * @member egret.MainContext.instance
        */
        static instance: MainContext;
    }
}
declare var testDeviceType: () => boolean;
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Profiler
    * @classdesc
    * Profiler是egret的性能检测分析类
    * @todo GitHub文档，如何使用Profiler
    */
    class Profiler {
        private static instance;
        /**
        * 返回系统中唯一的Profiler实例。
        * @returns {Profiler}
        */
        static getInstance(): Profiler;
        private _lastTime;
        private _logicPerformanceCost;
        private _renderPerformanceCost;
        private _updateTransformPerformanceCost;
        private _preDrawCount;
        private _txt;
        private _tick;
        private _maxDeltaTime;
        private _totalDeltaTime;
        /**
        * 启动Profiler
        * @method egret.Profiler#run
        */
        public run(): void;
        /**
        * @private
        */
        private onEnterFrame(event);
        /**
        * @private
        */
        private onStartRender(event);
        private onFinishUpdateTransform(event);
        /**
        * @private
        */
        private onFinishRender(event);
        /**
        * @private
        */
        private update(frameTime);
        /**
        * @method egret.Profiler#onDrawImage
        * @private
        */
        public onDrawImage(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Ticker
    * @classdesc
    * Ticker是egret引擎的心跳控制器，是游戏唯一的时间处理入口。开发者务必不要使用setTimeout / setInterval 等方法，而是统一使用Ticker
    * @extends egret.EventDispatcher
    */
    class Ticker extends EventDispatcher {
        private _timeScale;
        private _paused;
        /**
        * 启动心跳控制器。
        * 这个函数应只在游戏初始化时调用一次
        * @method egret.Ticker#run
        * @stable A
        */
        public run(): void;
        private update(advancedTime);
        private callBackList;
        /**
        * 注册帧回调事件，同一函数的重复监听会被忽略。
        * @method egret.Ticker#register
        * @param listener {Function} 帧回调函数,参数返回上一帧和这帧的间隔时间。示例：onEnterFrame(frameTime:number):void
        * @param thisObject {any} 帧回调函数的this对象
        * @param priority {any} 事件优先级，开发者请勿传递 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY
        * @stable A-
        */
        public register(listener: Function, thisObject: any, priority?: number): void;
        /**
        * 取消侦听enterFrame事件
        * @method egret.Ticker#unregister
        * @param listener {Function} 事件侦听函数
        * @param thisObject {any} 侦听函数的this对象
        * @stable A-
        */
        public unregister(listener: Function, thisObject: any): void;
        /**
        * 在指定的延迟（以毫秒为单位）后运行指定的函数。
        * @method egret.Ticker#setTimeout
        * @param listener {Function}
        * @param thisObject {any}
        * @param delay {number}
        * @param ...parameter {any}
        * @deprecated
        */
        public setTimeout(listener: Function, thisObject: any, delay: number, ...parameters: any[]): void;
        /**
        * @method egret.Ticker#setTimeScale
        * @param timeScale {number}
        */
        public setTimeScale(timeScale: number): void;
        /**
        * @method egret.Ticker#getTimeScale
        */
        public getTimeScale(): number;
        /**
        * @method egret.Ticker#pause
        */
        public pause(): void;
        /**
        * @method egret.Ticker#resume
        */
        public resume(): void;
        private static instance;
        /**
        * @method egret.Ticker.getInstance
        * @returns {Ticker}
        */
        static getInstance(): Ticker;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.HorizontalAlign
    * @classdesc 水平对齐方式
    */
    class HorizontalAlign {
        /**
        * 左对齐
        * @constant egret.HorizontalAlign.LEFT
        */
        static LEFT: string;
        /**
        * 右对齐
        * @constant egret.HorizontalAlign.RIGHT
        */
        static RIGHT: string;
        /**
        * 水平居中对齐
        * @constant egret.HorizontalAlign.CENTER
        */
        static CENTER: string;
        /**
        * 水平两端对齐
        * 注意：TextFiled不支持此对齐方式。
        * @constant egret.HorizontalAlign.JUSTIFY
        */
        static JUSTIFY: string;
        /**
        * 相对于容器对子项进行内容对齐。这会将所有子项的大小统一调整为容器的"内容宽度"。
        * 容器的"内容宽度"是最大子项的大小,如果所有子项都小于容器的宽度，则会将所有子项的大小调整为容器的宽度。
        * 注意：TextFiled不支持此对齐方式。
        * @constant egret.HorizontalAlign.CONTENT_JUSTIFY
        */
        static CONTENT_JUSTIFY: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.VerticalAlign
    * @classdesc 垂直对齐方式
    */
    class VerticalAlign {
        /**
        * 顶对齐
        * @constant egret.VerticalAlign.TOP
        */
        static TOP: string;
        /**
        * 底对齐
        * @constant egret.VerticalAlign.BOTTOM
        */
        static BOTTOM: string;
        /**
        * 垂直居中对齐
        * @constant egret.VerticalAlign.MIDDLE
        */
        static MIDDLE: string;
        /**
        * 垂直两端对齐
        * 注意：TextFiled不支持此对齐方式。
        * @constant egret.VerticalAlign.JUSTIFY
        */
        static JUSTIFY: string;
        /**
        * 相对于容器对子项进行内容对齐。这会将所有子项的大小统一调整为容器的"内容高度"。
        * 容器的"内容高度"是最大子项的大小,如果所有子项都小于容器的高度，则会将所有子项的大小调整为容器的高度。
        * 注意：TextFiled不支持此对齐方式。
        * @constant egret.VerticalAlign.CONTENT_JUSTIFY
        */
        static CONTENT_JUSTIFY: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class Timer extends EventDispatcher {
        constructor(delay: number, repeatCount?: number);
        public delay: number;
        public repeatCount: number;
        private _currentCount;
        public currentCount(): number;
        private _running;
        public running : boolean;
        public reset(): void;
        public start(): void;
        public stop(): void;
        private lastTime;
        private onEnterFrame(frameTime);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * 返回一个对象的完全限定名<br/>
    * @param value 需要完全限定类名称的对象，可以将任何 TypeScript / JavaScript值传递给此方法，包括所有可用的TypeScript / JavaScript类型、对象实例、原始类型（如number）和类对象
    * @returns {string} 包含完全限定类名称的字符串<br />
    * @example
    *  egret.getQualifiedClassName(egret.DisplayObject) //返回 "egret.DisplayObject"
    */
    function getQualifiedClassName(value: any): string;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * 返回 name 参数指定的类的类对象引用。
    * @param name 类的名称。
    * @returns {any} 返回 name 参数指定的类的类对象引用。
    * @example
    * egret.getDefinitionByName("egret.DisplayObject") //返回 DisplayObject类定义
    */
    function getDefinitionByName(name: string): any;
}
declare var __global: any;
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * 在指定的延迟（以毫秒为单位）后运行指定的函数。
    * @method egret.setTimeout
    * @param listener {Function}
    * @param thisObject {any}
    * @param delay {number}
    * @param args {any}
    * @returns {number} 唯一引用
    */
    function setTimeout(listener: Function, thisObject: any, delay: number, ...args: any[]): number;
    /**
    * 清除指定延迟后运行的函数。
    * @method egret.clearTimeout
    * @param key {number}
    */
    function clearTimeout(key: number): void;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * 检查指定的应用程序域之内是否存在一个公共定义。该定义可以是一个类、一个命名空间或一个函数的定义。
    * @param name 定义的名称。
    * @returns {boolean} 如果指定的定义存在，则返回 true 值；否则，返回 false。
    * @example
    * egret.hasDefinition("egret.DisplayObject") //返回 true
    */
    function hasDefinition(name: string): boolean;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * 转换数字为颜色字符串
    */
    function toColorString(value: number): string;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Matrix
    * @classdesc
    * 2D矩阵类，包括常见矩阵算法
    * @extends egret.HashObject
    */
    class Matrix extends HashObject {
        public a: number;
        public b: number;
        public c: number;
        public d: number;
        public tx: number;
        public ty: number;
        /**
        * @method egret.Matrix#constructor
        * @constructor
        * @param a {number}
        * @param b {number}
        * @param c {number}
        * @param d {number}
        * @param tx {number}
        * @param ty {number}
        */
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        static identity: Matrix;
        static DEG_TO_RAD: number;
        /**
        * 前置矩阵
        * @method egret.Matrix#prepend
        * @param a {number}
        * @param b {number}
        * @param c {number}
        * @param d {number}
        * @param tx {number}
        * @param ty {number}
        * @returns {egret.Matrix}
        */
        public prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        /**
        * 后置矩阵
        * @method egret.Matrix#append
        * @param a {number}
        * @param b {number}
        * @param c {number}
        * @param d {number}
        * @param tx {number}
        * @param ty {number}
        * @returns {egret.Matrix}
        */
        public append(a: any, b: any, c: any, d: any, tx: any, ty: any): Matrix;
        /**
        * 前置矩阵
        * @method egret.Matrix#prependMatrix
        * @param matrix {number}
        * @returns {egret.Matrix}
        */
        public prependMatrix(matrix: Matrix): Matrix;
        /**
        * 后置矩阵
        * @method egret.Matrix#appendMatrix
        * @param matrix {egret.Matrix}
        * @returns {egret.Matrix}
        */
        public appendMatrix(matrix: Matrix): Matrix;
        /**
        * 前置矩阵
        * @method egret.Matrix#prependTransform
        * @param x {number}
        * @param y {number}
        * @param scaleX {number}
        * @param scaleY {number}
        * @param rotation {number}
        * @param skewX {number}
        * @param skewY {number}
        * @param regX {number}
        * @param regY {number}
        * @returns {egret.Matrix}
        */
        public prependTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX: number, regY: number): Matrix;
        /**
        * 后置矩阵
        * @method egret.Matrix#appendTransform
        * @param x {number}
        * @param y {number}
        * @param scaleX {number}
        * @param scaleY {number}
        * @param rotation {number}
        * @param skewX {number}
        * @param skewY {number}
        * @param regX {number}
        * @param regY {number}
        * @returns {egret.Matrix}
        */
        public appendTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX: number, regY: number): Matrix;
        /**
        * 矩阵旋转，以角度制为单位
        * @method egret.Matrix#rotate
        * @param angle {number}
        * @returns {egret.Matrix}
        */
        public rotate(angle: any): Matrix;
        /**
        * 矩阵斜切，以角度值为单位
        * @method egret.Matrix#skew
        * @param skewX {number}
        * @param skewY {number}
        * @returns {egret.Matrix}
        */
        public skew(skewX: any, skewY: any): Matrix;
        /**
        * 矩阵缩放
        * @method egret.Matrix#scale
        * @param x {number}
        * @param y {number}
        * @returns {egret.Matrix}
        */
        public scale(x: any, y: any): Matrix;
        /**
        * 矩阵唯一
        * @method egret.Matrix#translate
        * @param x {number}
        * @param y {number}
        * @returns {egret.Matrix}
        */
        public translate(x: any, y: any): Matrix;
        /**
        * 矩阵重置
        * @method egret.Matrix#identity
        * @returns {egret.Matrix}
        */
        public identity(): Matrix;
        /**
        * 矩阵翻转
        * @method egret.Matrix#invert
        * @returns {egret.Matrix}
        */
        public invert(): Matrix;
        /**
        * 根据一个矩阵，返回某个点在该矩阵上的坐标
        * @method egret.Matrix.transformCoords
        * @param matrix {egret.Matrix}
        * @param x {number}
        * @param y {number}
        * @returns {numberPoint}
        * @stable C 该方法以后可能删除
        */
        static transformCoords(matrix: Matrix, x: number, y: number): Point;
        private array;
        public toArray(transpose: any): any;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Point
    * @classdesc
    * Point 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
    * @extends egret.HashObject
    */
    class Point extends HashObject {
        static identity: Point;
        /**
        * 创建一个 egret.Point 对象
        * @method egret.Point#constructor
        * @param x {number} 该对象的x属性值，默认为0
        * @param y {number} 该对象的y属性值，默认为0
        */
        constructor(x?: number, y?: number);
        /**
        * 该点的水平坐标。默认值为 0。
        * @constant {number} egret.Point#x
        */
        public x: number;
        /**
        * 该点的垂直坐标。默认值为 0。
        * @constant {number} egret.Point#y
        */
        public y: number;
        /**
        * 克隆点对象
        * @method egret.Point#clone
        * @returns {egret.Point}
        */
        public clone(): Point;
        /**
        * 确定两个点是否相同。如果两个点具有相同的 x 和 y 值，则它们是相同的点。
        * @method egret.Point#equals
        * @param {egret.Point} toCompare 要比较的点。
        * @returns {boolean} 如果该对象与此 Point 对象相同，则为 true 值，如果不相同，则为 false。
        */
        public equals(toCompare: Point): boolean;
        /**
        * 返回 pt1 和 pt2 之间的距离。
        * @method egret.Point#distance
        * @param p1 {egret.Point} 第一个点
        * @param p2 {egret.Point} 第二个点
        * @returns {number} 第一个点和第二个点之间的距离。
        */
        static distance(p1: Point, p2: Point): number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Rectangle
    * @classdesc
    * 矩形类
    * @extends egret.HashObject
    */
    class Rectangle extends HashObject {
        constructor(x?: number, y?: number, width?: number, height?: number);
        /**
        * 矩形x坐标
        * @constant {number} egret.Rectangle#x
        */
        public x: number;
        /**
        * 矩形y坐标
        * @constant {number} egret.Rectangle#y
        */
        public y: number;
        /**
        * 矩形宽度
        * @member {number} egret.Rectangle#width
        */
        public width: number;
        /**
        * 矩形高度
        * @member {number} egret.Rectangle#height
        */
        public height: number;
        /**
        * x和width的和
        * @member {number} egret.Rectangle#right
        */
        public right : number;
        /**
        * y和height的和
        * @member {number} egret.Rectangle#bottom
        */
        public bottom : number;
        /**
        * 举行类初始化赋值，开发者尽量调用此方法复用Rectangle对象，而不是每次需要的时候都重新创建
        * @method egret.Rectangle#initialize
        * @param x {number} 矩形的x轴
        * @param y {number} 矩形的y轴
        * @param width {number} 矩形的宽度
        * @param height {number} 矩形的高度
        * @returns {egret.Rectangle}
        */
        public initialize(x: number, y: number, width: number, height: number): Rectangle;
        /**
        * 判断某坐标点是否存在于矩形内
        * @method egret.Rectangle#contains
        * @param x {number} 检测点的x轴
        * @param y {number} 检测点的y轴
        * @returns {boolean} 如果检测点位于矩形内，返回true，否则，返回false
        */
        public contains(x: number, y: number): boolean;
        /**
        * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交。此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
        * @method egret.Rectangle#intersects
        * @param toIntersect {egret.Rectangle} 要与此 Rectangle 对象比较的 Rectangle 对象。
        * @returns {boolean} 如果两个矩形相交，返回true，否则返回false
        */
        public intersects(toIntersect: Rectangle): boolean;
        /**
        * 克隆矩形对象
        * @method egret.Rectangle#clone
        * @returns {egret.Rectangle} 返回克隆后的矩形
        */
        public clone(): Rectangle;
        /**
        * 引擎内部用于函数传递返回值的全局矩形对象，开发者请勿随意修改此对象
        * @member {egret.Rectangle} egret.Rectangle.identity
        */
        static identity: Rectangle;
        /**
        * 是否包含某个点
        * @method egret.Rectangle#containsPoint
        * @param point {egret.Point} 包含点对象
        * @returns {boolean} 如果包含，返回true，否则返回false
        */
        public containsPoint(point: Point): boolean;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Logger
    * @classdesc
    * Logger是引擎的日志处理模块入口
    * @stable B 目前Logger的接口设计没有问题，但是考虑到跨平台，需要将其改为一个Context，并且允许开发者自由扩展以实现自身游戏的日志分析收集需求
    * todo:GitHub文档，如何利用日志帮助游戏持续改进
    */
    class Logger {
        /**
        * 表示出现了致命错误，开发者必须修复错误
        * @method egret.Logger.fatal
        * @param actionCode {string} 错误信息
        * @param value {Object} 错误描述信息
        */
        static fatal(actionCode: string, value?: Object): void;
        /**
        * 记录正常的Log信息
        * @method egret.Logger.info
        * @param actionCode {string} 错误信息
        * @param value {Object} 错误描述信息
        */
        static info(actionCode: string, value?: Object): void;
        /**
        * 记录可能会出现问题的Log信息
        * @method egret.Logger.warning
        * @param actionCode {string} 错误信息
        * @param value {Object} 错误描述信息
        */
        static warning(actionCode: string, value?: Object): void;
        /**
        * @private
        * @param type
        * @param actionCode
        * @param value
        */
        private static traceToConsole(type, actionCode, value);
        /**
        * @private
        * @param type
        * @param actionCode
        * @param value
        * @returns {string}
        */
        private static getTraceCode(type, actionCode, value);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.StageDelegate
    * @classdesc
    * StageDelegate负责处理屏幕适配策略
    * @extends egret.HashObject
    */
    class StageDelegate extends HashObject {
        private static instance;
        /**
        * @method egret.StageDelegate.getInstance
        * @returns {StageDelegate}
        */
        static getInstance(): StageDelegate;
        /**
        * @member egret.StageDelegate.canvas_name
        */
        static canvas_name: string;
        /**
        * @member egret.StageDelegate.canvas_div_name
        */
        static canvas_div_name: string;
        private _designWidth;
        private _designHeight;
        public _scaleX: number;
        public _scaleY: number;
        private _resolutionPolicy;
        /**
        * @method egret.StageDelegate#constructor
        */
        constructor();
        /**
        * @method egret.StageDelegate#setDesignSize
        * @param width {number}
        * @param height {{number}}
        */
        public setDesignSize(width: number, height: number): void;
        /**
        * @method egret.StageDelegate#_setResolutionPolicy
        * @param resolutionPolic {any}
        */
        public _setResolutionPolicy(resolutionPolicy: ResolutionPolicy): void;
        /**
        * @method egret.StageDelegate#getScaleX
        */
        public getScaleX(): number;
        /**
        * @method egret.StageDelegate#getScaleY
        */
        public getScaleY(): number;
    }
    /**
    * @class egret.ResolutionPolicy
    * @classdesc
    */
    class ResolutionPolicy {
        private _containerStrategy;
        private _contentStrategy;
        constructor(containerStg: any, contentStg: any);
        /**
        * @method egret.ResolutionPolicy#init
        * @param view {egret.StageDelegate}
        */
        public init(view: StageDelegate): void;
        /**
        * @method egret.ResolutionPolicy#_apply
        * @param view {any}
        * @param designedResolutionWidth {any}
        * @param designedResolutionHeigh {any}
        */
        public _apply(view: any, designedResolutionWidth: any, designedResolutionHeight: any): void;
        /**
        * @method egret.ResolutionPolicy#setContainerStrategy
        * @param containerStg {any}
        */
        public setContainerStrategy(containerStg: any): void;
        /**
        * @method egret.ResolutionPolicy#setContentStrategy
        * @param contentStg {any}
        */
        public setContentStrategy(contentStg: any): void;
    }
    /**
    * @class egret.ContainerStrategy
    * @classdesc
    */
    class ContainerStrategy {
        /**
        * @constant egret.ContainerStrategy.EQUAL_TO_FRAME
        */
        static EQUAL_TO_FRAME: any;
        /**
        * @method egret.ContainerStrategy.initialize
        */
        static initialize(): void;
        /**
        * @method egret.ContainerStrategy#init
        * @param vie {any}
        */
        public init(view: any): void;
        /**
        * @method egret.ContainerStrategy#_apply
        * @param view {any}
        * @param designedWidth {any}
        * @param designedHeigh {any}
        */
        public _apply(view: any, designedWidth: any, designedHeight: any): void;
        public _setupContainer(): void;
    }
    /**
    * @class egret.EqualToFrame
    * @classdesc
    * @extends egret.ContainerStrategy
    */
    class EqualToFrame extends ContainerStrategy {
        public _apply(view: any): void;
    }
    /**
    * @class egret.ContentStrategy
    * @classdesc
    */
    class ContentStrategy {
        /**
        * @method egret.ContentStrategy#init
        * @param vie {any}
        */
        public init(view: any): void;
        /**
        * @method egret.ContentStrategy#_apply
        * @param delegate {egret.StageDelegate}
        * @param designedResolutionWidth {number}
        * @param designedResolutionHeight {number}
        */
        public _apply(delegate: StageDelegate, designedResolutionWidth: number, designedResolutionHeight: number): void;
    }
    /**
    * @class egret.FixedHeight
    * @classdesc
    * @extends egret.ContentStrategy
    */
    class FixedHeight extends ContentStrategy {
        private minWidth;
        /**
        * 构造函数
        * @param minWidth 最终游戏内适配的最小stageWidth，默认没有最小宽度
        */
        constructor(minWidth?: number);
        /**
        * @method egret.FixedHeight#_apply
        * @param delegate {any}
        * @param designedResolutionWidth {any}
        * @param designedResolutionHeight {any}
        */
        public _apply(delegate: StageDelegate, designedResolutionWidth: number, designedResolutionHeight: number): void;
    }
    /**
    * @class egret.FixedWidth
    * @classdesc
    * @extends egret.ContentStrategy
    */
    class FixedWidth extends ContentStrategy {
        private minHeight;
        /**
        * 构造函数
        * @param minHeight 最终游戏内适配的最小stageHeight，默认没有最小高度
        */
        constructor(minHeight?: number);
        /**
        * @method egret.FixedWidth#_apply
        * @param delegate {egret.StageDelegate}
        * @param designedResolutionWidth {any}
        * @param designedResolutionHeight {any}
        */
        public _apply(delegate: StageDelegate, designedResolutionWidth: number, designedResolutionHeight: number): void;
    }
    /**
    * @class egret.FixedSize
    * @classdesc
    * @extends egret.ContentStrategy
    */
    class FixedSize extends ContentStrategy {
        private width;
        private height;
        constructor(width: any, height: any);
        /**
        * @method egret.FixedSize#_apply
        * @param delegate {egret.StageDelegate}
        * @param designedResolutionWidth {number}
        * @param designedResolutionHeight {number}
        */
        public _apply(delegate: StageDelegate, designedResolutionWidth: number, designedResolutionHeight: number): void;
    }
    /**
    * @class egret.NoScale
    * @classdesc
    * @extends egret.ContentStrategy
    */
    class NoScale extends ContentStrategy {
        constructor();
        /**
        * @method egret.NoScale#_apply
        * @param delegate {egret.StageDelegate}
        * @param designedResolutionWidth {number}
        * @param designedResolutionHeight {number}
        */
        public _apply(delegate: StageDelegate, designedResolutionWidth: number, designedResolutionHeight: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.RenderFilter
    * @classdesc
    * @extends egret.HashObject
    */
    class RenderFilter extends HashObject {
        constructor();
        private static instance;
        /**
        * @method egret.egret.getInstance
        * @returns {RenderFilter}
        */
        static getInstance(): RenderFilter;
        public _drawAreaList: Rectangle[];
        private _defaultDrawAreaList;
        private _originalData;
        /**
        * @method egret.egret#addDrawArea
        * @param area {egret.Rectangle}
        */
        public addDrawArea(area: Rectangle): void;
        /**
        * @method egret.egret#clearDrawArea
        */
        public clearDrawArea(): void;
        /**
        * 先检查有没有不需要绘制的区域，再把需要绘制的区域绘制出来
        * @method egret.egret#drawImage
        * @param renderContext {any}
        * @param data {RenderData}
        * @param sourceX {any}
        * @param sourceY {any}
        * @param sourceWidth {any}
        * @param sourceHeight {any}
        * @param destX {any}
        * @param destY {any}
        * @param destWidth {any}
        * @param destHeight {any}
        */
        public drawImage(renderContext: RendererContext, data: RenderData, sourceX: number, sourceY: number, sourceWidth: number, sourceHeight: number, destX: number, destY: number, destWidth: number, destHeight: number): void;
        private ignoreRender(data, rect, destX, destY);
        /**
        * @method egret.egret#getDrawAreaList
        * @returns {Rectangle}
        */
        public getDrawAreaList(): Rectangle[];
    }
    /**
    * @class egret.RenderData
    * @interface
    * @classdesc
    */
    interface RenderData {
        /**
        * @member egret.RenderData#worldTransform
        */
        _worldTransform: Matrix;
        /**
        * @member egret.RenderData#worldBounds
        */
        _worldBounds: Rectangle;
        _texture_to_render: Texture;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @classdesc 注入器
    * @class egret.Injector
    */
    class Injector {
        /**
        * 储存类的映射规则
        */ 
        private static mapClassDic;
        /**
        * 以类定义为值进行映射注入，当第一次用getInstance()请求它的单例时才会被实例化。
        * @method egret.Injector.mapClass
        * @param {any} whenAskedFor 传递类定义或类完全限定名作为需要映射的键。
        * @param {any} instantiateClass 传递类作为需要映射的值，它的构造函数必须为空。若不为空，请使用Injector.mapValue()方法直接注入实例。
        * @param {string} named 可选参数，在同一个类作为键需要映射多条规则时，可以传入此参数区分不同的映射。在调用getInstance()方法时要传入同样的参数。
        */
        static mapClass(whenAskedFor: any, instantiateClass: any, named?: string): void;
        /**
        * 获取完全限定类名
        */ 
        private static getKey(hostComponentKey);
        private static mapValueDic;
        /**
        * 以实例为值进行映射注入,当用getInstance()请求单例时始终返回注入的这个实例。
        * @method egret.Injector.mapValue
        * @param whenAskedFor {any} 传递类定义或类的完全限定名作为需要映射的键。
        * @param useValue {any} 传递对象实例作为需要映射的值。
        * @param named {string} 可选参数，在同一个类作为键需要映射多条规则时，可以传入此参数区分不同的映射。在调用getInstance()方法时要传入同样的参数。
        */ 
        static mapValue(whenAskedFor: any, useValue: any, named?: string): void;
        /**
        * 检查指定的映射规则是否存在
        * @method egret.Injector.hasMapRule
        * @param whenAskedFor {any} 传递类定义或类的完全限定名作为需要映射的键。
        * @param named {string} 可选参数，在同一个类作为键需要映射多条规则时，可以传入此参数区分不同的映射。
        */
        static hasMapRule(whenAskedFor: any, named?: string): boolean;
        /**
        * 获取指定类映射的单例，注意:这个方法总是返回全局唯一的实例，不会重复创建。
        * @method egret.Injector.getInstance
        * @param clazz {any} 类定义或类的完全限定名
        * @param named {string} 可选参数，若在调用mapClass()映射时设置了这个值，则要传入同样的字符串才能获取对应的单例
        */ 
        static getInstance(clazz: any, named?: string): any;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module egret {
    /**
    * @class egret.BlendMode
    * @classdesc 提供混合模式可视效果的常量值的类。
    */
    class BlendMode {
        /**
        * 将显示对象的原色值添加到它的背景颜色中，上限值为 0xFF。此设置通常用于使两个对象间的加亮溶解产生动画效果。
        * @constant {string} egret.BlendMode.NORMAL
        */
        static NORMAL: string;
        /**
        * 将显示对象的原色值添加到它的背景颜色中，上限值为 0xFF。此设置通常用于使两个对象间的加亮溶解产生动画效果。
        * @constant {string} egret.BlendMode.ADD
        */
        static ADD: string;
        /**
        * 强制为该显示对象创建一个透明度组。这意味着在对显示对象进行进一步处理之前，该对象已在临时缓冲区中预先构成。
        * 在以下情况下将会自动完成预先构成操作：显示对象通过位图缓存进行预缓存，或者显示对象是一个显示对象容器，
        * 该容器至少具有一个带有 blendMode 设置（而不是 "normal"）的子对象。
        * @constant {string} egret.BlendMode.LAYER
        */
        static LAYER: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written pemission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.DisplayObject
    * @extends egret.EventDispatcher
    * @classdesc 类是可放在显示列表中的所有对象的基类。该显示列表管理运行时显示的所有对象。使用 DisplayObjectContainer 类排列显示列表中的显示对象。
    *
    * DisplayObjectContainer 对象可以有子显示对象，而其他显示对象是“叶”节点，只有父级和同级，没有子级。
    *
    * DisplayObject 类支持基本功能（如对象的 x 和 y 位置），也支持更高级的对象属性（如它的转换矩阵），所有显示对象都继承自 DisplayObject 类。
    *
    * DisplayObject 类包含若干广播事件。通常，任何特定事件的目标均为一个特定的 DisplayObject 实例。
    *
    * 若只有一个目标，则会将事件侦听器限制为只能放置到该目标上（在某些情况下，可放置到显示列表中该目标的祖代上），这意味着您可以向任何 DisplayObject 实例添加侦听器来侦听广播事件。
    *
    * 任何继承自DisplayObject的类都必须实现以下方法
    * _render();
    * _measureBounds()
    * 不允许重写以下方法
    * _draw();
    * getBounds();
    *
    */
    class DisplayObject extends EventDispatcher implements RenderData {
        constructor();
        private _normalDirty;
        public _setDirty(): void;
        public getDirty(): boolean;
        private _sizeDirty;
        public _setParentSizeDirty(): void;
        public _setSizeDirty(): void;
        public _clearDirty(): void;
        public _clearSizeDirty(): void;
        /**
        * 表示 DisplayObject 的实例名称。
        * @member {string} egret.DisplayObject#name
        */
        public name: string;
        public _texture_to_render: Texture;
        public _parent: DisplayObjectContainer;
        private _cacheAsBitmap;
        /**
        * 表示包含此显示对象的 DisplayObjectContainer 对象
        * @member {egret.DisplayObjectContainer} egret.DisplayObject#parent
        */
        public parent : DisplayObjectContainer;
        public _parentChanged(parent: DisplayObjectContainer): void;
        /**
        * 表示 DisplayObject 实例相对于父级 DisplayObjectContainer 本地坐标的 x 坐标。
        * @member {number} egret.DisplayObject#x
        */
        public _x: number;
        public x : number;
        /**
        * 表示 DisplayObject 实例相对于父级 DisplayObjectContainer 本地坐标的 y 坐标。
        * @member {number} egret.DisplayObject#y
        */
        public _y: number;
        public y : number;
        /**
        * 表示从注册点开始应用的对象的水平缩放比例（百分比）。
        * @member {number} egret.DisplayObject#scaleX
        * @default 1
        */
        public _scaleX: number;
        public scaleX : number;
        /**
        * 表示从对象注册点开始应用的对象的垂直缩放比例（百分比）。
        * @member {number} egret.DisplayObject#scaleY
        * @default 1
        */
        public _scaleY: number;
        public scaleY : number;
        /**
        * 表示从对象绝对锚点X。
        * @member {number} egret.DisplayObject#anchorOffsetX
        * @default 0
        */
        public _anchorOffsetX: number;
        public anchorOffsetX : number;
        /**
        * 表示从对象绝对锚点Y。
        * @member {number} egret.DisplayObject#anchorOffsetY
        * @default 0
        */
        public _anchorOffsetY: number;
        public anchorOffsetY : number;
        /**
        * 表示从对象相对锚点X。
        * @member {number} egret.DisplayObject#anchorX
        * @default 0
        */
        public _anchorX: number;
        public anchorX : number;
        /**
        * 表示从对象相对锚点Y。
        * @member {number} egret.DisplayObject#anchorY
        * @default 0
        */
        public _anchorY: number;
        public anchorY : number;
        /**
        * 显示对象是否可见。
        * @member {boolean} egret.DisplayObject#visible
        */
        public _visible: boolean;
        public visible : boolean;
        /**
        * 表示 DisplayObject 实例距其原始方向的旋转程度，以度为单位
        * @member {number} egret.DisplayObject#rotation
        * @default 0
        */
        public _rotation: number;
        public rotation : number;
        /**
        * 表示指定对象的 Alpha 透明度值
        * @member {number} egret.DisplayObject#alpha
        *  @default 1
        */
        public _alpha: number;
        public alpha : number;
        /**
        * 表示DisplayObject的x方向斜切
        * @member {number} egret.DisplayObject#skewX
        * @default 0
        */
        public _skewX: number;
        public skewX : number;
        /**
        * 表示DisplayObject的y方向斜切
        * @member {number} egret.DisplayObject#skewY
        * @default 0
        */
        public _skewY: number;
        public skewY : number;
        /**
        * 指定此对象是否接收鼠标/触摸事件
        * @member {boolean} egret.DisplayObject#touchEnabled
        * @default false
        */
        public _touchEnabled: boolean;
        public touchEnabled : boolean;
        /**
        * BlendMode 类中的一个值，用于指定要使用的混合模式。
        * @member {BlendMode} egret.DisplayObject#blendMode
        */
        public blendMode: string;
        /**
        * 显示对象的滚动矩形范围。显示对象被裁切为矩形定义的大小，当您更改 scrollRect 对象的 x 和 y 属性时，它会在矩形内滚动。
        *  @member {egret.Rectangle} egret.DisplayObject#scrollRect
        */
        public _scrollRect: Rectangle;
        public scrollRect : Rectangle;
        /**
        * 测量宽度
        * @returns {number}
        */
        public measuredWidth : number;
        /**
        * 测量高度
        * @returns {number}
        */
        public measuredHeight : number;
        /**
        * 显式设置宽度
        * @returns {number}
        */
        public _explicitWidth: number;
        public explicitWidth : number;
        /**
        * 显式设置高度
        * @returns {number}
        */
        public _explicitHeight: number;
        public explicitHeight : number;
        /**
        * 宽度，优先顺序为 显式设置宽度 > 测量宽度
        * @member {number} egret.DisplayObject#width
        * @returns {number}
        */
        /**
        * 显式设置宽度
        * @param value
        */
        public width : number;
        /**
        * 高度，优先顺序为 显式设置高度 > 测量高度
        * @member {number} egret.DisplayObject#height
        * @returns {number}
        */
        /**
        * 显式设置高度
        * @param value
        */
        public height : number;
        public _hasWidthSet: Boolean;
        /**
        * @inheritDoc
        */
        public _setWidth(value: number): void;
        public _hasHeightSet: Boolean;
        /**
        * @inheritDoc
        */
        public _setHeight(value: number): void;
        /**
        * 调用显示对象被指定的 mask 对象遮罩
        */
        public mask: Rectangle;
        public _worldTransform: Matrix;
        public _worldBounds: Rectangle;
        public worldAlpha: number;
        /**
        * @private
        * @param renderContext
        */
        public _draw(renderContext: RendererContext): void;
        private drawCacheTexture(renderContext);
        /**
        * @private
        * @param renderContext
        */
        public _updateTransform(): void;
        /**
        * @private
        * @param renderContext
        */
        public _render(renderContext: RendererContext): void;
        private _cacheBounds;
        /**
        * 获取显示对象的测量边界
        * @method egret.DisplayObject#getBounds
        * @param resultRect {Rectangle} 可选参数，传入用于保存结果的Rectangle对象，避免重复创建对象。
        * @returns {Rectangle}
        */
        public getBounds(resultRect?: Rectangle): Rectangle;
        private destroyCacheBounds();
        /**
        * @private
        * @returns {Matrix}
        */
        private static identityMatrixForGetConcatenated;
        public _getConcatenatedMatrix(): Matrix;
        /**
        * 将 point 对象从显示对象的（本地）坐标转换为舞台（全局）坐标。
        * @method egret.DisplayObject#localToGlobal
        * @param x {number} 本地x坐标
        * @param y {number} 本地y坐标
        * @param resultPoint {Point} 可选参数，传入用于保存结果的Point对象，避免重复创建对象。
        * @returns {egret.Point}
        */
        public localToGlobal(x?: number, y?: number, resultPoint?: Point): Point;
        /**
        * 将指定舞台坐标（全局）转换为显示对象（本地）坐标。
        * @method egret.DisplayObject#globalToLocal
        * @param x {number} 全局x坐标
        * @param y {number} 全局y坐标
        * @param resultPoint {Point} 可选参数，传入用于保存结果的Point对象，避免重复创建对象。
        * @returns {egret.Point}
        */
        public globalToLocal(x?: number, y?: number, resultPoint?: Point): Point;
        /**
        * 检测指定坐标是否在显示对象内
        * @method egret.DisplayObject#hitTest
        * @param x {number} 检测坐标的x轴
        * @param y {number} 检测坐标的y轴
        * @param ignoreTouchEnabled {boolean} 是否忽略TouchEnabled
        * @returns {*}
        */
        public hitTest(x: number, y: number, ignoreTouchEnabled?: boolean): DisplayObject;
        private _hitTestPointTexture;
        public hitTestPoint(x: number, y: number, shapeFlag?: boolean): boolean;
        public _getMatrix(): Matrix;
        public _getSize(resultRect: Rectangle): Rectangle;
        private _rectW;
        private _rectH;
        /**
        * 测量显示对象坐标与大小
        */
        public _measureSize(resultRect: Rectangle): Rectangle;
        /**
        * 测量显示对象坐标，这个方法需要子类重写
        * @returns {egret.Rectangle}
        * @private
        */
        public _measureBounds(): Rectangle;
        public _getOffsetPoint(): Point;
        public _onAddToStage(): void;
        public _onRemoveFromStage(): void;
        public _stage: Stage;
        /**
        * 获取舞台对象。当该显示对象不在舞台上时，此属性返回 undefined
        * @member {number} egret.DisplayObject#stage
        * @returns {egret.Stage}
        */
        public stage : Stage;
        static _enterFrameCallBackList: any[];
        static _renderCallBackList: any[];
        public addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        public removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        public dispatchEvent(event: Event): boolean;
        public _dispatchPropagationEvent(event: Event, list: DisplayObject[], targetIndex: number): void;
        public willTrigger(type: string): boolean;
        public cacheAsBitmap : boolean;
        private renderTexture;
        static getTransformBounds(bounds: Rectangle, mtx: Matrix): Rectangle;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.DisplayObjectContainer
    * @classdesc
    * DisplayObjectContainer 类是显示列表中显示对象容器。
    */
    class DisplayObjectContainer extends DisplayObject {
        static __EVENT__ADD_TO_STAGE_LIST: DisplayObject[];
        static __EVENT__REMOVE_FROM_STAGE_LIST: DisplayObject[];
        constructor();
        public _touchChildren: boolean;
        /**
        * 指定此对象的子项以及子孙项是否接收鼠标/触摸事件
        * @member {boolean} egret.DisplayObjectContainer#touchChildren
        */
        public touchChildren : boolean;
        public _children: DisplayObject[];
        /**
        * 返回此对象的子项数目。
        * @member {number} egret.DisplayObjectContainer#numChildren
        */
        public numChildren : number;
        /**
        * 更改现有子项在显示对象容器中的位置。这会影响子对象的分层。
        * @method egret.DisplayObjectContainer#setChildIndex
        * @param child {egret.DisplayObject} 要为其更改索引编号的 DisplayObject 子实例。
        * @param index {number} 生成的 child 显示对象的索引编号。当新的索引编号小于0或大于已有子元件数量时，新加入的DisplayObject对象将会放置于最上层。
        */
        public setChildIndex(child: DisplayObject, index: number): void;
        private doSetChildIndex(child, index);
        /**
        * 将一个 DisplayObject 子实例添加到该 DisplayObjectContainer 实例中。子项将被添加到该 DisplayObjectContainer 实例中其他所有子项的前（上）面。（要将某子项添加到特定索引位置，请使用 addChildAt() 方法。）
        * @method egret.DisplayObjectContainer#addChild
        * @param child {egret.DisplayObject} 要作为该 DisplayObjectContainer 实例的子项添加的 DisplayObject 实例。
        * @returns {egret.DisplayObject} 在 child 参数中传递的 DisplayObject 实例。
        */
        public addChild(child: DisplayObject): DisplayObject;
        /**
        * 将一个 DisplayObject 子实例添加到该 DisplayObjectContainer 实例中。该子项将被添加到指定的索引位置。索引为 0 表示该 DisplayObjectContainer 对象的显示列表的后（底）部。如果索引值为-1，则表示该DisplayObjectContainer 对象的显示列表的前（上）部。
        * @method egret.DisplayObjectContainer#addChildAt
        * @param child {egret.DisplayObject} 要作为该 DisplayObjectContainer 实例的子项添加的 DisplayObject 实例。
        * @param index {number} 添加该子项的索引位置。 如果指定当前占用的索引位置，则该位置以及所有更高位置上的子对象会在子级列表中上移一个位置。
        * @returns {egret.DisplayObject} 在 child 参数中传递的 DisplayObject 实例。
        */
        public addChildAt(child: DisplayObject, index: number): DisplayObject;
        public _doAddChild(child: DisplayObject, index: number, notifyListeners?: boolean): DisplayObject;
        /**
        * 将一个 DisplayObject 子实例从 DisplayObjectContainer 实例中移除。
        * @method egret.DisplayObjectContainer#removeChild
        * @param child {egret.DisplayObject} 要删除的 DisplayObject 实例。
        * @returns {egret.DisplayObject} 在 child 参数中传递的 DisplayObject 实例。
        */
        public removeChild(child: DisplayObject): DisplayObject;
        /**
        * 从 DisplayObjectContainer 的子列表中指定的 index 位置删除子 DisplayObject。
        * @method egret.DisplayObjectContainer#removeChildAt
        * @param index {number} 要删除的 DisplayObject 的子索引。
        * @returns {egret.DisplayObject} 已删除的 DisplayObject 实例。
        */
        public removeChildAt(index: number): DisplayObject;
        public _doRemoveChild(index: number, notifyListeners?: boolean): DisplayObject;
        /**
        * 返回位于指定索引处的子显示对象实例。
        * @method egret.DisplayObjectContainer#getChildAt
        * @param index {number} 子对象的索引位置。
        * @returns {egret.DisplayObject} 位于指定索引位置处的子显示对象。
        */
        public getChildAt(index: number): DisplayObject;
        /**
        * 确定指定显示对象是 DisplayObjectContainer 实例的子项还是该实例本身。搜索包括整个显示列表（其中包括此 DisplayObjectContainer 实例）。孙项、曾孙项等，每项都返回 true。
        * @method egret.DisplayObjectContainer#contains
        * @param child {egret.DisplayObject} 要测试的子对象。
        * @returns {boolean} 如果指定的显示对象为DisplayObjectContainer该实例本身，则返回true，如果指定的显示对象为当前实例子项，则返回false。
        */
        public contains(child: DisplayObject): boolean;
        /**
        * 在子级列表中两个指定的索引位置，交换子对象的 Z 轴顺序（前后顺序）。显示对象容器中所有其他子对象的索引位置保持不变。
        * @method egret.DisplayObjectContainer#swapChildrenAt
        * @param index1 {number} 第一个子对象的索引位置。
        * @param index2 {number} 第二个子对象的索引位置。
        */
        public swapChildrenAt(index1: number, index2: number): void;
        /**
        * 交换两个指定子对象的 Z 轴顺序（从前到后顺序）。显示对象容器中所有其他子对象的索引位置保持不变。
        * @method egret.DisplayObjectContainer#swapChildren
        * @param child1 {egret.DisplayObject} 第一个子对象。
        * @param child2 {egret.DisplayObject} 第二个子对象。
        */
        public swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        private _swapChildrenAt(index1, index2);
        /**
        * 返回 DisplayObject 的 child 实例的索引位置。
        * @method egret.DisplayObjectContainer#getChildIndex
        * @param child {egret.DisplayObject} 要标识的 DisplayObject 实例。
        * @returns {number} 要标识的子显示对象的索引位置。
        */
        public getChildIndex(child: DisplayObject): number;
        /**
        * 从 DisplayObjectContainer 实例的子级列表中删除所有 child DisplayObject 实例。
        * @method egret.DisplayObjectContainer#removeChildren
        */
        public removeChildren(): void;
        public _updateTransform(): void;
        public _render(renderContext: RendererContext): void;
        /**
        * @see egret.DisplayObject._measureBounds
        * @returns {null}
        * @private
        */
        public _measureBounds(): Rectangle;
        /**
        * 检测指定坐标是否在显示对象内
        * @method egret.DisplayObjectContainer#hitTest
        * @see egret.DisplayObject.hitTest
        * @param x {number} 检测坐标的x轴
        * @param y {number} 检测坐标的y轴
        * @param ignoreTouchEnabled {boolean} 是否忽略TouchEnabled
        * @returns {egret.DisplayObject} 返回所发生碰撞的DisplayObject对象
        */
        public hitTest(x: number, y: number, ignoreTouchEnabled?: boolean): DisplayObject;
        public _onAddToStage(): void;
        public _onRemoveFromStage(): void;
        /**
        * 返回具有指定名称的子显示对象。
        * @method egret.DisplayObjectContainer#getChildByName
        * @param name {string} 要返回的子项的名称。
        * @returns {egret.DisplayObject} 具有指定名称的子显示对象。
        */
        public getChildByName(name: string): DisplayObject;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Stage
    * @classdesc Stage 类代表主绘图区。
    */
    class Stage extends DisplayObjectContainer {
        private _scaleMode;
        static _invalidateRenderFlag: boolean;
        /**
        * 调用 invalidate() 方法后，在显示列表下次呈现时，Egret 会向每个已注册侦听 render 事件的显示对象发送一个 render 事件。
        * 每次您希望 Egret 发送 render 事件时，都必须调用 invalidate() 方法。
        * @method egret.Stage#invalidate
        */
        public invalidate(): void;
        constructor(width?: number, height?: number);
        public scaleMode : string;
        private _stageWidth;
        /**
        * @member {number} egret.Stage#stageWidth
        * 舞台宽度（坐标系宽度，非设备宽度）
        */
        public stageWidth : number;
        private _stageHeight;
        /**
        * @member {number} egret.Stage#stageHeight
        * 舞台高度（坐标系高度，非设备高度）
        */
        public stageHeight : number;
        /**
        * @member egret.Stage#hitTest
        * @see egret.DisplayObject#hitTest
        * @param x
        * @param y
        * @returns {egret.DisplayObject}
        */
        public hitTest(x: any, y: any): DisplayObject;
        /**
        * 返回舞台尺寸范围
        * @member egret.Stage#getBounds
        * @see egret.DisplayObject#getBounds
        * @param resultRect {egret.Rectangle} 可选参数，传入用于保存结果的Rectangle对象，避免重复创建对象。
        * @returns {egret.Rectangle}
        */
        public getBounds(resultRect?: Rectangle): Rectangle;
        public _updateTransform(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class StageScaleMode {
        static NO_SCALE: string;
        static SHOW_ALL: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.BitmapFillMode
    * @classdesc
    * BitmapFillMode 类定义Bitmap的图像填充方式。
    */
    class BitmapFillMode {
        /**
        * 位图将重复以填充区域
        * @constant {string} egret.BitmapFillMode.REPEAT
        */
        static REPEAT: string;
        /**
        * 位图将拉伸以填充区域
        * @constant {string} egret.BitmapFillMode.SCALE
        */
        static SCALE: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Bitmap
    * @classdesc
    * Bitmap 类表示用于表示位图图像的显示对象。
    * @extends egret.DisplayObject
    */
    class Bitmap extends DisplayObject {
        /**
        * 全部Bitmap是否开启DEBUG模式
        * @member {boolean} egret.Bitmap.debug
        */
        static debug: boolean;
        constructor(texture?: Texture);
        /**
        * 单个Bitmap是否开启DEBUG模式
        * @member {boolean} egret.Bitmap#debug
        */
        public debug: boolean;
        /**
        * debug边框颜色，默认值为红色
        * @member {number} egret.Bitmap#debugColor
        */
        public debugColor: number;
        private _texture;
        /**
        * 渲染纹理
        * @member {egret.Texture} egret.Bitmap#texture
        */
        public texture : Texture;
        /**
        * 矩形区域，它定义位图对象的九个缩放区域。此属性仅当fillMode为BitmapFillMode.SCALE时有效。
        * @member {egret.Texture} egret.Bitmap#scale9Grid
        */
        public scale9Grid: Rectangle;
        /**
        * 确定位图填充尺寸的方式。默认值：BitmapFillMode.SCALE。
        * 设置为 BitmapFillMode.REPEAT时，位图将重复以填充区域。
        * 设置为 BitmapFillMode.SCALE时，位图将拉伸以填充区域。
        * @member {egret.Texture} egret.Bitmap#fillMode
        */
        public fillMode: string;
        public _render(renderContext: RendererContext): void;
        static _drawBitmap(renderContext: RendererContext, destW: number, destH: number, thisObject: any): void;
        /**
        * 绘制平铺位图
        */
        private static drawRepeatImage(renderContext, data, destWidth, destHeight);
        /**
        * 绘制九宫格位图
        */
        private static drawScale9GridImage(renderContext, data, scale9Grid, destWidth, destHeight);
        /**
        * @see egret.DisplayObject.measureBounds
        * @returns {egret.Rectangle}
        * @private
        */
        public _measureBounds(): Rectangle;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @classdesc
    * @class egret.BitmapText
    * 位图字体采用了Bitmap+SpriteSheet的方式来渲染文字。
    * @extends egret.DisplayObjectContainer
    */
    class BitmapText extends DisplayObjectContainer {
        /**
        * 设置文本
        */
        private _text;
        private _textChanged;
        /**
        * 显示的文本内容
        * @member {string} egret.BitmapText#text
        *
        */
        public text : string;
        /**
        * BitmapTextSpriteSheet对象，缓存了所有文本的位图纹理
        * @member {egret.BitmapTextSpriteSheet} egret.BitmapText#spriteSheet
        */
        public spriteSheet: BitmapTextSpriteSheet;
        private _bitmapPool;
        constructor();
        public _updateTransform(): void;
        public _renderText(forMeasureContentSize?: boolean): Rectangle;
        public _measureBounds(): Rectangle;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Graphics
    * @classdesc Graphics 类包含一组可用来创建矢量形状的方法。支持绘制的显示对象包括 Sprite 和 Shape 对象。这些类中的每一个类都包括 graphics 属性，该属性是一个 Graphics 对象。
    */
    class Graphics {
        private canvasContext;
        private commandQueue;
        private renderContext;
        private strokeStyleColor;
        private fillStyleColor;
        constructor();
        /**
        * 指定一种简单的单一颜色填充
        * @method egret.Graphics#beginFill
        * @param color {number} 填充的颜色
        * @param alpha {number} 填充的 Alpha 值
        */
        public beginFill(color: number, alpha?: number): void;
        private _setStyle(colorStr);
        /**
        * 绘制一个矩形。
        * @method egret.Graphics#drawRect
        * @param x {number} 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
        * @param y {number} 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
        * @param width {number} 矩形的宽度（以像素为单位）。
        * @param height {number} 矩形的高度（以像素为单位）。
        */
        public drawRect(x: number, y: number, width: number, height: number): void;
        /**
        * 绘制一个圆。
        * @method egret.Graphics#drawCircle
        * @param x {number} 圆心相对于父显示对象注册点的 x 位置（以像素为单位）。
        * @param y {number} 相对于父显示对象注册点的圆心的 y 位置（以像素为单位）。
        * @param r {number} 圆的半径（以像素为单位）。
        */
        public drawCircle(x: number, y: number, r: number): void;
        /**
        * 指定一种线条样式以用于随后对 lineTo() 或 drawCircle() 等 Graphics 方法的调用。
        * @method egret.Graphics#lineStyle
        * @param thickness {number} 一个整数，以点为单位表示线条的粗细，有效值为 0 到 255。如果未指定数字，或者未定义该参数，则不绘制线条。如果传递的值小于 0，则默认值为 0。值 0 表示极细的粗细；最大粗细为 255。如果传递的值大于 255，则默认值为 255。
        * @param color {number} 线条的十六进制颜色值（例如，红色为 0xFF0000，蓝色为 0x0000FF 等）。如果未指明值，则默认值为 0x000000（黑色）。可选。
        * @param alpha {number} 表示线条颜色的 Alpha 值的数字；有效值为 0 到 1。如果未指明值，则默认值为 1（纯色）。如果值小于 0，则默认值为 0。如果值大于 1，则默认值为 1。
        * @param pixelHinting {boolean} 布尔型值，指定是否提示笔触采用完整像素。它同时影响曲线锚点的位置以及线条笔触大小本身。在 pixelHinting 设置为 true 的情况下，线条宽度会调整到完整像素宽度。在 pixelHinting 设置为 false 的情况下，对于曲线和直线可能会出现脱节。
        * @param scaleMode {string} 用于指定要使用的比例模式
        * @param caps {string} 用于指定线条末端处端点类型的 CapsStyle 类的值。
        * @param joints {string} 指定用于拐角的连接外观的类型。
        * @param miterLimit {number} 用于表示剪切斜接的极限值的数字。
        */
        public lineStyle(thickness?: number, color?: number, alpha?: number, pixelHinting?: boolean, scaleMode?: string, caps?: string, joints?: string, miterLimit?: number): void;
        /**
        * 使用当前线条样式绘制一条从当前绘图位置开始到 (x, y) 结束的直线；当前绘图位置随后会设置为 (x, y)。
        * @method egret.Graphics#lineTo
        * @param x {number} 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
        * @param y {number} 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
        */
        public lineTo(x: number, y: number): void;
        /**
        * 使用当前线条样式和由 (controlX, controlY) 指定的控制点绘制一条从当前绘图位置开始到 (anchorX, anchorY) 结束的二次贝塞尔曲线。当前绘图位置随后设置为 (anchorX, anchorY)。
        * 如果在调用 moveTo() 方法之前调用了 curveTo() 方法，则当前绘图位置的默认值为 (0, 0)。如果缺少任何一个参数，则此方法将失败，并且当前绘图位置不改变。
        * 绘制的曲线是二次贝塞尔曲线。二次贝塞尔曲线包含两个锚点和一个控制点。该曲线内插这两个锚点，并向控制点弯曲。
        * @method egret.Graphics#curveTo
        * @param controlX {number} 一个数字，指定控制点相对于父显示对象注册点的水平位置。
        * @param controlY {number} 一个数字，指定控制点相对于父显示对象注册点的垂直位置。
        * @param anchorX {number} 一个数字，指定下一个锚点相对于父显示对象注册点的水平位置。
        * @param anchorY {number} 一个数字，指定下一个锚点相对于父显示对象注册点的垂直位置。
        */
        public curveTo(controlX: Number, controlY: Number, anchorX: Number, anchorY: Number): void;
        /**
        * 将当前绘图位置移动到 (x, y)。如果缺少任何一个参数，则此方法将失败，并且当前绘图位置不改变。
        * @method egret.Graphics#moveTo
        * @param x {number} 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
        * @param y {number} 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
        */
        public moveTo(x: number, y: number): void;
        /**
        * 清除绘制到此 Graphics 对象的图形，并重置填充和线条样式设置。
        * @method egret.Graphics#clear
        */
        public clear(): void;
        /**
        * 对从上一次调用 beginFill()方法之后添加的直线和曲线应用填充。
        * @method egret.Graphics#endFill
        */
        public endFill(): void;
        public _draw(renderContext: RendererContext): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Shape
    * @classdesc 此类用于使用 Egret 绘图应用程序编程接口 (API) 创建简单形状。Shape 类包括 graphics 属性，该属性使您可以从 Graphics 类访问方法。
    */
    class Shape extends DisplayObject {
        constructor();
        /**
        * 获取 Shape 中的 Graphics 对象。
        * @member {egret.Graphics} egret.Shape#graphics
        */
        private _graphics;
        public graphics : Graphics;
        public _render(renderContext: RendererContext): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Sprite
    * @classdesc Sprite 类是基本显示列表构造块：一个可显示图形并且也可包含子项的显示列表节点。Sprite 对象与影片剪辑类似，但没有时间轴。Sprite 是不需要时间轴的对象的相应基类。例如，Sprite 将是通常不使用时间轴的用户界面 (UI) 组件的逻辑基类。
    */
    class Sprite extends DisplayObjectContainer {
        constructor();
        /**
        * 获取 Sprite 中的 Graphics 对象。
        * @member {egret.Graphics} egret.Sprite#graphics
        */
        private _graphics;
        public graphics : Graphics;
        public _render(renderContext: RendererContext): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.TextField
    * @classdesc
    * TextField是egret的文本渲染类，采用浏览器/设备的API进行渲染，在不同的浏览器/设备中由于字体渲染方式不一，可能会有渲染差异
    * 如果开发者希望所有平台完全无差异，请使用BitmapText
    * @extends egret.DisplayObject
    */
    class TextField extends DisplayObject {
        /**
        * 显示文本
        * @member {string} egret.TextField#text
        */
        public _text: string;
        public text : string;
        public _setTextDirty(): void;
        /**
        * 字体
        * @member {any} egret.TextField#fontFamily
        */
        public _fontFamily: string;
        public fontFamily : string;
        /**
        * 字号
        * @member {number} egret.TextField#size
        */
        public _size: number;
        public size : number;
        /**
        * 是否显示为斜体，默认false。
        * @member {boolean} egret.TextField#italic
        */
        public _italic: boolean;
        public italic : boolean;
        /**
        * 是否显示为粗体，默认false。
        * @member {boolean} egret.TextField#bold
        */
        public _bold: boolean;
        public bold : boolean;
        public _textColorString: string;
        private _textColor;
        /**
        * 文字颜色
        * @member {number} egret.TextField#textColor
        */
        public textColor : number;
        public _strokeColorString: string;
        private _strokeColor;
        /**
        * 描边颜色
        * @member {number} egret.TextField#strokeColor
        */
        public strokeColor : number;
        /**
        * 描边宽度，0为没有描边
        * @member {number} egret.TextField#stroke
        */
        public _stroke: number;
        public stroke : number;
        /**
        * 文本水平对齐方式,使用HorizontalAlign定义的常量，默认值HorizontalAlign.LEFT。
        * @member {string} egret.TextField#textAlign
        */
        public _textAlign: string;
        public textAlign : string;
        /**
        * 文本垂直对齐方式,使用VerticalAlign定义的常量，默认值VerticalAlign.TOP。
        * @member {string} egret.TextField#verticalAlign
        */
        public _verticalAlign: string;
        public verticalAlign : string;
        /**
        * @member {any} egret.TextField#maxWidth
        */
        public maxWidth: any;
        /**
        * 行间距
        * @member {number} egret.TextField#lineSpacing
        */
        public _lineSpacing: number;
        public lineSpacing : number;
        private _numLines;
        /**
        * 文本行数
        * @member {number} egret.TextField#numLines
        */
        public numLines : number;
        constructor();
        /**
        * @see egret.DisplayObject._render
        * @param renderContext
        */
        public _render(renderContext: RendererContext): void;
        /**
        * 测量显示对象坐标与大小
        */
        public _measureBounds(): Rectangle;
        /**
        * @private
        * @param renderContext
        * @returns {Rectangle}
        */
        private drawText(renderContext, forMeasure);
        private _textWidth;
        private _textHeight;
        private measuredWidths;
        private getTextLines(renderContext);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.TextFieldType
    * @classdesc
    * TextFieldType 类是在设置 TextField 类的 type 属性时使用的常数值的枚举。
    */
    class TextFieldType {
        /**
        * 用于指定动态文本
        * @constant {string} egret.TextFieldType.DYNAMIC
        */
        static DYNAMIC: string;
        /**
        * 用于指定输入文本
        * @constant {string} egret.TextFieldType.INPUT
        */
        static INPUT: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.SpriteSheet
    * @classdesc SpriteSheet是一张由多个子位图拼接而成的集合位图，它包含多个Texture对象。
    * 每一个Texture都共享SpriteSheet的集合位图，但是指向它的不同的区域。
    * 在WebGL / OpenGL上，这种做法可以显著提升性能
    * 同时，SpriteSheet可以很方便的进行素材整合，降低HTTP请求数量
    * SpriteSheet 格式的具体规范可以参见此文档  https://github.com/egret-labs/egret-core/wiki/Egret-SpriteSheet-Specification
    *
    */
    class SpriteSheet extends HashObject {
        constructor(texture: Texture);
        /**
        * 表示bitmapData.width
        */
        public _sourceWidth: number;
        /**
        * 表示bitmapData.height
        */
        public _sourceHeight: number;
        /**
        * 表示这个SpriteSheet的位图区域在bitmapData上的起始位置x。
        */
        private _bitmapX;
        /**
        * 表示这个SpriteSheet的位图区域在bitmapData上的起始位置y。
        */
        private _bitmapY;
        /**
        * 共享的位图数据
        */
        private bitmapData;
        /**
        * 纹理缓存字典
        */
        public _textureMap: Object;
        /**
        * 根据指定纹理名称获取一个缓存的Texture对象
        * @method egret.SpriteSheet#getTexture
        * @param name {string} 缓存这个Texture对象所使用的名称
        * @returns {egret.Texture} Texture对象
        */
        public getTexture(name: string): Texture;
        /**
        * 为SpriteSheet上的指定区域创建一个新的Texture对象并缓存它
        * @method egret.SpriteSheet#createTexture
        * @param name {string} 缓存这个Texture对象所使用的名称，如果名称已存在，将会覆盖之前的Texture对象
        * @param bitmapX {number} 纹理区域在bitmapData上的起始坐标x
        * @param bitmapY {number} 纹理区域在bitmapData上的起始坐标y
        * @param bitmapWidth {number} 纹理区域在bitmapData上的宽度
        * @param bitmapHeight {number} 纹理区域在bitmapData上的高度
        * @param offsetX {number} 原始位图的非透明区域x起始点
        * @param offsetY {number} 原始位图的非透明区域y起始点
        * @param textureWidth {number} 原始位图的高度，若不传入，则使用bitmapWidth的值。
        * @param textureHeight {number} 原始位图的宽度，若不传入，这使用bitmapHeight值。
        * @returns {egret.Texture} 创建的Texture对象
        */
        public createTexture(name: string, bitmapX: number, bitmapY: number, bitmapWidth: number, bitmapHeight: number, offsetX?: number, offsetY?: number, textureWidth?: number, textureHeight?: number): Texture;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class TextInput extends DisplayObject {
        private _domInputSprite;
        private _edTxt;
        private _delegate;
        private _placeholderText;
        private _edFontSize;
        private _textColor;
        private _placeholderFontSize;
        private _placeholderColor;
        private _preX;
        private _preY;
        private stageText;
        public _onAddToStage(): void;
        public setText(value: string): void;
        public getText(): string;
        public setTextType(type: string): void;
        public getTextType(): string;
        private onMouseDownHandler(event);
        public _onRemoveFromStage(): void;
        public _measureBounds(): Rectangle;
        public hitTest(x: any, y: any, ignoreTouchEnabled?: boolean): DisplayObject;
    }
    class TextInputDegelete {
        public editBoxEditingDidBegin(sender: any): void;
        public editBoxEditingDidEnd(sender: any): void;
        public editBoxTextChanged(sender: any, text: any): void;
        public editBoxReturn(sender: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class BitmapTextSpriteSheet extends SpriteSheet {
        constructor(texture: Texture, fntText: string);
        private charList;
        public getTexture(name: string): Texture;
        private parseConfig(fntText);
        private getConfigByKey(configText, key);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.MovieClip
    * @classdesc 影片剪辑，可以通过影片剪辑播放序列帧动画。
    * @extends egret.DisplayObjectContainer
    */
    class MovieClip extends DisplayObjectContainer {
        private delegate;
        /**
        * @member {number} egret.MovieClip#frameRate
        * 动画的播放帧频
        */
        public frameRate: number;
        constructor(data: any, texture?: Texture);
        /**
        * 播放指定动画
        * @method egret.MovieClip#gotoAndPlay
        * @param frameName {string} 指定帧的帧名称
        
        */
        public gotoAndPlay(frameName: string): void;
        /**
        * 播放并暂停指定动画
        * @method egret.MovieClip#gotoAndStop
        * @param frameName {string} 指定帧的帧名称
        
        */
        public gotoAndStop(frameName: string): void;
        /**
        * 暂停动画
        * @method egret.MovieClip#stop
        */
        public stop(): void;
        /**
        * @method egret.MovieClip#dispose
        */
        public dispose(): void;
        /**
        * 方法名改为 dispose
        * @method egret.MovieClip#release
        * @deprecated
        */
        public release(): void;
        /**
        * @method egret.MovieClip#getCurrentFrameIndex
        * @deprecated
        * @returns {number}
        */
        public getCurrentFrameIndex(): number;
        /**
        * 获取当前影片剪辑的帧频数
        * @method egret.MovieClip#getTotalFrame
        * @deprecated
        * @returns {number}
        */
        public getTotalFrame(): number;
        /**
        * @method egret.MovieClip#setInterval
        * @deprecated
        * @param value {number}
        */
        public setInterval(value: number): void;
        /**
        * @method egret.MovieClip#getIsPlaying
        * @deprecated
        * @returns {boolean}
        */
        public getIsPlaying(): boolean;
    }
    interface MovieClipDelegate {
        gotoAndPlay(frameName: string): void;
        gotoAndStop(frameName: string): void;
        stop(): void;
        dispose(): void;
        setMovieClip(movieclip: MovieClip): void;
    }
    class DefaultMovieClipDelegate implements MovieClipDelegate {
        public data: any;
        private _frameData;
        private _totalFrame;
        private _spriteSheet;
        private _passTime;
        private _currentFrameIndex;
        private _currentFrameName;
        private _isPlaying;
        private movieClip;
        private bitmap;
        constructor(data: any, texture: Texture);
        public setMovieClip(movieClip: MovieClip): void;
        public gotoAndPlay(frameName: string): void;
        public gotoAndStop(frameName: string): void;
        public stop(): void;
        public dispose(): void;
        private checkHasFrame(name);
        private update(advancedTime);
        private playNextFrame(needShow?);
        private getTexture(name);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.StageText
    * @classdesc
    * @extends egret.HashObject
    */
    class StageText extends HashObject {
        private div;
        private inputElement;
        constructor();
        /**
        * @method egret.StageText#getText
        * @returns {string}
        */
        public _getText(): string;
        /**
        * @method egret.StageText#setText
        * @param value {string}
        */
        public _setText(value: string): void;
        /**
        * @method egret.StageText#setTextType
        * @param type {string}
        */
        public _setTextType(type: string): void;
        /**
        * @method egret.StageText#getTextType
        * @returns {string}
        */
        public _getTextType(): string;
        /**
        * @method egret.StageText#open
        * @param x {number}
        * @param y {number}
        * @param width {number}
        * @param height {number}
        */
        public _open(x: number, y: number, width?: number, height?: number): void;
        /**
        * @method egret.StageText#remove
        */
        public _remove(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.URLRequestMethod
    * @classdesc URLRequestMethod 类提供了一些值，这些值可指定在将数据发送到服务器时，
    * URLRequest 对象应使用 POST 方法还是 GET 方法。
    */
    class URLRequestMethod {
        /**
        * 表示 URLRequest 对象是一个 GET。
        * @constant {string} egret.URLRequestMethod.GET
        */
        static GET: string;
        /**
        * 表示 URLRequest 对象是一个 POST。
        * @constant {string} egret.URLRequestMethod.POST
        */
        static POST: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.URLLoaderDataFormat
    * @classdesc URLLoaderDataFormat 类提供了一些用于指定如何接收已下载数据的值。
    */
    class URLLoaderDataFormat {
        /**
        * 指定以原始二进制数据形式接收下载的数据。
        * @constant {string} egret.URLLoaderDataFormat.BINARY
        */
        static BINARY: string;
        /**
        * 指定以文本形式接收已下载的数据。
        * @constant {string} egret.URLLoaderDataFormat.TEXT
        */
        static TEXT: string;
        /**
        * 指定以 URL 编码变量形式接收下载的数据。
        * @constant {string} egret.URLLoaderDataFormat.VARIABLES
        */
        static VARIABLES: string;
        /**
        * 指定以位图纹理形式接收已下载的数据。
        * @constant {string} egret.URLLoaderDataFormat.TEXTURE
        */
        static TEXTURE: string;
        /**
        * 指定以声音形式接收已下载的数据。
        * @constant {string} egret.URLLoaderDataFormat.SOUND
        */
        static SOUND: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.URLVariables
    * @classdesc
    * 使用 URLVariables 类可以在应用程序和服务器之间传输变量。
    * 将 URLVariables 对象与 URLLoader 类的方法、URLRequest 类的 data 属性一起使用。
    * @extends egret.HashObject
    */
    class URLVariables extends HashObject {
        /**
        * @method egret.URLVariables#constructor
        * @param source {String} 包含名称/值对的 URL 编码的字符串。
        */
        constructor(source?: string);
        /**
        * 此 URLVariables 储存的键值对数据对象。
        * @member egret.URLVariables#variables
        */
        public variables: Object;
        /**
        * 将变量字符串转换为此 URLVariables.variables 对象的属性。
        * @method egret.URLVariables#decode
        * @param source {string}
        */
        public decode(source: string): void;
        /**
        * 以 MIME 内容编码格式 application/x-www-form-urlencoded 返回包含所有可枚举变量的字符串。
        * @method egret.URLVariables#toString
        */
        public toString(): string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.URLRequest
    * @classdesc URLRequest 类可捕获单个 HTTP 请求中的所有信息。
    * @extends egret.HashObject
    */
    class URLRequest extends HashObject {
        /**
        * 实例化一个URLRequest对象
        * @method egret.URLRequest#constructor
        * @param url {string} 进行网络请求的地址
        */
        constructor(url?: string);
        /**
        * 一个对象，它包含将随 URL 请求一起传输的数据。
        * 该属性与 method 属性配合使用。当 method 值为 GET 时，将使用 HTTP 查询字符串语法将 data 值追加到 URLRequest.url 值。
        * 当 method 值为 POST（或 GET 之外的任何值）时，将在 HTTP 请求体中传输 data 值。
        * URLRequest API 支持二进制 POST，并支持 URL 编码变量和字符串。该数据对象可以是 ByteArray、URLVariables 或 String 对象。
        * 该数据的使用方式取决于所用对象的类型：
        * 如果该对象为 ByteArray 对象，则 ByteArray 对象的二进制数据用作 POST 数据。对于 GET，不支持 ByteArray 类型的数据。
        * 如果该对象是 URLVariables 对象，并且该方法是 POST，则使用 x-www-form-urlencoded 格式对变量进行编码，并且生成的字符串会用作 POST 数据。
        * 如果该对象是 URLVariables 对象，并且该方法是 GET，则 URLVariables 对象将定义要随 URLRequest 对象一起发送的变量。
        * 否则，该对象会转换为字符串，并且该字符串会用作 POST 或 GET 数据。
        * @member {any} egret.URLRequest#data
        */
        public data: any;
        /**
        * 请求方式，有效值为URLRequestMethod.GET 或 URLRequestMethod.POST。
        * @member {string} egret.URLRequest#method
        */
        public method: string;
        /**
        * 所请求的 URL。
        * @member {string} egret.URLRequest#url
        */
        public url: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.URLLoader
    * @classdesc
    * URLLoader 类以文本、二进制数据或 URL 编码变量的形式从 URL 下载数据。在下载文本文件、XML 或其他用于动态数据驱动应用程序的信息时，它很有用。
    * URLLoader 对象会先从 URL 中下载所有数据，然后才将数据用于应用程序中的代码。它会发出有关下载进度的通知，
    * 通过 bytesLoaded 和 bytesTotal 属性以及已调度的事件，可以监视下载进度。
    * @extends egret.EventDispatcher
    */
    class URLLoader extends EventDispatcher {
        /**
        * @method egret.URLLoader#constructor
        * @param request {URLRequest} 一个 URLRequest 对象，指定要下载的 URL。
        * 如果省略该参数，则不开始加载操作。如果已指定参数，则立即开始加载操作
        */
        constructor(request?: URLRequest);
        /**
        * 控制是以文本 (URLLoaderDataFormat.TEXT)、原始二进制数据 (URLLoaderDataFormat.BINARY) 还是 URL 编码变量 (URLLoaderDataFormat.VARIABLES) 接收下载的数据。
        * 如果 dataFormat 属性的值是 URLLoaderDataFormat.TEXT，则所接收的数据是一个包含已加载文件文本的字符串。
        * 如果 dataFormat 属性的值是 URLLoaderDataFormat.BINARY，则所接收的数据是一个包含原始二进制数据的 ByteArray 对象。
        * 如果 dataFormat 属性的值是 URLLoaderDataFormat.TEXTURE，则所接收的数据是一个包含位图数据的Texture对象。
        * 如果 dataFormat 属性的值是 URLLoaderDataFormat.VARIABLES，则所接收的数据是一个包含 URL 编码变量的 URLVariables 对象。
        * 默认值:URLLoaderDataFormat.TEXT
        * @member {string} egret.URLLoader#dataFormat
        */
        public dataFormat: string;
        /**
        * 从加载操作接收的数据。只有完成加载操作时，才会填充该属性。该数据的格式取决于 dataFormat 属性的设置：
        * 如果 dataFormat 属性是 URLLoaderDataFormat.TEXT，则所接收的数据是一个包含已加载文件文本的字符串。
        * 如果 dataFormat 属性是 URLLoaderDataFormat.BINARY，则所接收的数据是一个包含原始二进制数据的 ByteArray 对象。
        * 如果 dataFormat 属性是 URLLoaderDataFormat.TEXTURE，则所接收的数据是一个包含位图数据的Texture对象。
        * 如果 dataFormat 属性是 URLLoaderDataFormat.VARIABLES，则所接收的数据是一个包含 URL 编码变量的 URLVariables 对象。
        * @member {any} egret.URLLoader#data
        */
        public data: any;
        public _request: URLRequest;
        /**
        * 从指定的 URL 发送和加载数据。可以以文本、原始二进制数据或 URL 编码变量格式接收数据，这取决于为 dataFormat 属性所设置的值。
        * 请注意 dataFormat 属性的默认值为文本。如果想将数据发送至指定的 URL，则可以在 URLRequest 对象中设置 data 属性。
        * @method egret.URLLoader#load
        * @param request {URLRequest}  一个 URLRequest 对象，指定要下载的 URL。
        */
        public load(request: URLRequest): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Texture
    * @classdesc 纹理类是对不同平台不同的图片资源的封装
    * 在HTML5中，资源是一个HTMLElement对象
    * 在OpenGL / WebGL中，资源是一个提交GPU后获取的纹理id
    * Texture类封装了这些底层实现的细节，开发者只需要关心接口即可
    */
    class Texture extends HashObject {
        public webGLTexture: any;
        constructor();
        /**
        * 表示这个纹理在bitmapData上的x起始位置
        */
        public _bitmapX: number;
        /**
        * 表示这个纹理在bitmapData上的y起始位置
        */
        public _bitmapY: number;
        /**
        * 表示这个纹理在bitmapData上的宽度
        */
        public _bitmapWidth: number;
        /**
        * 表示这个纹理在bitmapData上的高度
        */
        public _bitmapHeight: number;
        /**
        * 表示这个纹理显示了之后在x方向的渲染偏移量
        */
        public _offsetX: number;
        /**
        * 表示这个纹理显示了之后在y方向的渲染偏移量
        */
        public _offsetY: number;
        public _textureWidth: number;
        /**
        * 纹理宽度
        * @member {number} egret.Texture#textureWidth
        */
        public textureWidth : number;
        public _textureHeight: number;
        /**
        * 纹理高度
        * @member {number} egret.Texture#textureWidth
        */
        public textureHeight : number;
        /**
        * 表示bitmapData.width
        */
        public _sourceWidth: number;
        /**
        * 表示bitmapData.height
        */
        public _sourceHeight: number;
        public _bitmapData: any;
        /**
        * 纹理对象中得位图数据
        * @member {any} egret.Texture#bitmapData
        */
        public bitmapData : any;
        public _setBitmapData(value: any): void;
        /**
        * 获取某一点像素的颜色值
        * @method egret.Texture#getPixel32
        * @param x 像素点的X轴坐标
        * @param y 像素点的Y轴坐标
        * @returns {number} 指定像素点的颜色值
        */
        public getPixel32(x: any, y: any): number[];
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.RenderTexture
    * @classdesc
    * RenderTexture 是动态纹理类，他实现了将显示对象及其子对象绘制成为一个纹理的功能
    * @extends egret.Texture
    */
    class RenderTexture extends Texture {
        private renderContext;
        constructor();
        /**
        * 将制定显示对象绘制为一个纹理
        * @method egret.RenderTexture#drawToTexture
        * @param displayObject {egret.DisplayObject}
        */
        public drawToTexture(displayObject: DisplayObject): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.RendererContext
    * @classdesc
    * RenderContext是游戏的渲染上下文。
    * 这是一个抽象基类，制定主要的接口
    * @extends egret.HashObject
    */
    class RendererContext extends HashObject {
        /**
        * 渲染全部纹理的时间开销
        * @member egret.RendererContext#renderCost
        */
        public renderCost: number;
        /**
        * 绘制纹理的缩放比率，默认值为1
        * @member egret.RendererContext#texture_scale_factor
        */
        public texture_scale_factor: number;
        /**
        * @method egret.RendererContext#constructor
        */
        constructor();
        /**
        * @method egret.RendererContext#clearScreen
        * @private
        */
        public clearScreen(): void;
        /**
        * 清除Context的渲染区域
        * @method egret.RendererContext#clearRect
        * @param x {number}
        * @param y {number}
        * @param w {number}
        * @param h {numbe}
        */
        public clearRect(x: number, y: number, w: number, h: number): void;
        /**
        * 绘制图片
        * @method egret.RendererContext#drawImage
        * @param texture {Texture}
        * @param sourceX {any}
        * @param sourceY {any}
        * @param sourceWidth {any}
        * @param sourceHeight {any}
        * @param destX {any}
        * @param destY {any}
        * @param destWidth {any}
        * @param destHeigh {any}
        */
        public drawImage(texture: Texture, sourceX: any, sourceY: any, sourceWidth: any, sourceHeight: any, destX: any, destY: any, destWidth: any, destHeight: any): void;
        /**
        * 变换Context的当前渲染矩阵
        * @method egret.RendererContext#setTransform
        * @param matrix {egret.Matri}
        */
        public setTransform(matrix: Matrix): void;
        /**
        * 设置渲染alpha
        * @method egret.RendererContext#setAlpha
        * @param value {number}
        * @param blendMode {egret.BlendMod}
        */
        public setAlpha(value: number, blendMode: string): void;
        /**
        * 设置渲染文本参数
        * @method egret.RendererContext#setupFont
        * @param textField {TextField}
        */
        public setupFont(textField: TextField): void;
        /**
        * 测量文本
        * @method egret.RendererContext#measureText
        * @param text {string}
        * @returns {number}
        * @stable B 参数很可能会需要调整，和setupFont整合
        */
        public measureText(text: string): number;
        /**
        * 绘制文本
        * @method egret.RendererContext#drawText
        * @param textField {egret.TextField}
        * @param text {string}
        * @param x {number}
        * @param y {number}
        * @param maxWidth {numbe}
        */
        public drawText(textField: TextField, text: string, x: number, y: number, maxWidth: number): void;
        public strokeRect(x: any, y: any, w: any, h: any, color: any): void;
        public pushMask(mask: Rectangle): void;
        public popMask(): void;
        static createRendererContext(canvas: any): RendererContext;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class InteractionMode {
        /**
        * 使用鼠标交互模式。
        */
        static MOUSE: string;
        /**
        * 使用触摸交互模式。
        */
        static TOUCH: string;
        /**
        * 当前Egret使用的交互模式。
        */
        static mode: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    *
    * @class egret.TouchContext
    * @classdesc TouchContext是egret的触摸Context
    */
    class TouchContext extends HashObject {
        private _currentTouchTarget;
        public maxTouches: number;
        private touchDownTarget;
        constructor();
        /**
        * 启动触摸检测
        * @method egret.TouchContext#run
        */
        public run(): void;
        public getTouchData(identifier: any, x: any, y: any): any;
        public dispatchEvent(type: string, data: any): void;
        public onTouchBegan(x: number, y: number, identifier: number): void;
        private lastTouchX;
        private lastTouchY;
        public onTouchMove(x: number, y: number, identifier: number): void;
        public onTouchEnd(x: number, y: number, identifier: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.NetContext
    * @classdesc
    * @extends egret.HashObject
    */
    class NetContext extends HashObject {
        constructor();
        public proceed(loader: URLLoader): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.DeviceContext
    * @classdesc
    * @extends egret.HashObject
    */
    class DeviceContext extends HashObject {
        /**
        * @member egret.DeviceContext#frameRate
        */
        public frameRate: number;
        /**
        * @method egret.DeviceContext#constructor
        */
        constructor();
        /**
        * @method egret.DeviceContext#executeMainLoop
        * @param callback {Function}
        * @param thisObject {any}
        */
        public executeMainLoop(callback: Function, thisObject: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * 这个类是HTML5的WebWrapper的第一个版本
    */
    class Browser extends HashObject {
        private static instance;
        private pfx;
        private type;
        private trans;
        private ua;
        private isHD;
        static getInstance(): Browser;
        /**
        * @deprecated
        * @returns {boolean}
        */
        public isMobile : boolean;
        constructor();
        public $new(x: any): any;
        public $(x: any): any;
        public translate: (a: any) => string;
        public rotate: (a: any) => string;
        public scale(a: any): string;
        public skew(a: any): string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.XML
    * @classdesc
    * XML文件解析工具，它将XML文件解析为标准的JSON对象返回。
    * 用法类似JSON.parse(),传入一个XML字符串给XML.parse()，将能得到一个标准JSON对象。
    * 示例：<root value="abc">
    *          <item value="item0"/>
    *          <item value="item1"/>
    *       </root>
    * 将解析为:
    * {"name":"root","$value":"abc","children":[{"name":"item","$value":"item0"},{"name":"item","$value":"item0"}]};
    *
    * 其中XML上的属性节点都使用$+"属性名"的方式表示,子节点都存放在children属性的列表里，name表示节点名称。
    */
    class XML {
        /**
        * 解析一个XML字符串为JSON对象。
        * @method egret.XML.parse
        * @param value {string} 要解析的XML字符串。
        * @returns {any} XML对应的JSON对象。
        */
        static parse(value: string): any;
        private static parseNode(node);
        /**
        * 查找xml上符合节点路径的所有子节点。
        * @method egret.XML.findChildren
        * @param xml {any} 要查找的XML节点。
        * @param path {string} 子节点路径，例如"item.node"
        * @param result {Array<any>} 可选参数，传入一个数组用于存储查找的结果。这样做能避免重复创建对象。
        * @returns {any} 返回所有符合path路径的xml上的子孙节点列表
        */
        static findChildren(xml: any, path: string, result?: any[]): any[];
        static findByPath(xml: any, path: string, result: any[]): void;
        /**
        * 获取一个XML节点上的所有属性名列表
        * @method egret.XML.getAttributes
        * @param xml {any} 要查找的XML节点。
        * @param result {Array<any>} 可选参数，传入一个数组用于存储查找的结果。这样做能避免重复创建对象。
        * @returns {any} 返回xml上的属性名列表,不包含"$"前缀。
        */
        static getAttributes(xml: any, result?: any[]): string[];
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * Endian 类中包含一些值，它们表示用于表示多字节数字的字节顺序。
    * 字节顺序为 bigEndian（最高有效字节位于最前）或 littleEndian（最低有效字节位于最前）。
    * @class egret.Endian
    * @classdesc
    */
    class Endian {
        /**
        * 表示多字节数字的最高有效字节位于字节序列的最前面
        * @constant {string} egret.Endian.LITTLE_ENDIAN
        */
        static LITTLE_ENDIAN: string;
        /**
        * 表示多字节数字的最低有效字节位于字节序列的最前面
        * @constant {string} egret.Endian.BIG_ENDIAN
        */
        static BIG_ENDIAN: string;
    }
    /**
    * ByteArray 类提供用于优化读取、写入以及处理二进制数据的方法和属性。
    * @class egret.ByteArray
    * @classdesc
    */
    class ByteArray {
        /**
        * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入
        * @member {number} egret.ByteArray#position
        */
        public position: number;
        /**
        * ByteArray 对象的长度（以字节为单位）。
        * @member {number} egret.ByteArray#length
        */
        public length: number;
        private _mode;
        private maxlength;
        private arraybytes;
        private unalignedarraybytestemp;
        private _endian;
        private isLittleEndian;
        /**
        * @constant {string} egret.ByteArray.DEFAULT_ENDIAN
        */
        static DEFAULT_ENDIAN: string;
        constructor();
        /**
        * 更改或读取数据的字节顺序；egret.Endian.BIG_ENDIAN 或 egret.Endian.LITTLE_ENDIAN。
        * @member {string} egret.ByteArray#endian
        */
        public endian : string;
        /**
        * @method egret.ByteArray#ensureWriteableSpace
        * @param n {number}
        */
        public ensureWriteableSpace(n: number): void;
        /**
        * @method egret.ByteArray#setArrayBuffer
        * @param aBuffer {egret.ArrayBuffer}
        */
        public setArrayBuffer(aBuffer: ArrayBuffer): void;
        /**
        * 可从字节数组的当前位置到数组末尾读取的数据的字节数。
        * 每次访问 ByteArray 对象时，将 bytesAvailable 属性与读取方法结合使用，以确保读取有效的数据。
        * @method egret.ByteArray#getBytesAvailable
        * @returns {number}
        */
        public bytesAvailable : number;
        /**
        * @method egret.ByteArray#ensureSpace
        * @param n {number}
        */
        public ensureSpace(n: number): void;
        /**
        * @method egret.ByteArray#writeByte
        * @param b {number}
        */
        public writeByte(b: number): void;
        /**
        * 从字节流中读取带符号的字节。
        * 返回值的范围是从 -128 到 127。
        * @method egret.ByteArray#readByte
        * returns {number} 介于 -128 和 127 之间的整数。
        */
        public readByte(): number;
        /**
        * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中。
        * @method egret.ByteArray#readBytes
        * @param bytes {egret.ByteArray} 要将数据读入的 ByteArray 对象。
        * @param offset {number} bytes 中的偏移（位置），应从该位置写入读取的数据。
        * @param length {number} 要读取的字节数。默认值 0 导致读取所有可用的数据。
        
        */
        public readBytes(bytes: ByteArray, offset?: number, length?: number): void;
        /**
        * @method egret.ByteArray#writeUnsignedByte
        * @param b {number}
        */
        public writeUnsignedByte(b: number): void;
        /**
        * @method egret.ByteArray#readUnsignedByte
        */
        public readUnsignedByte(): number;
        /**
        * @method egret.ByteArray#writeUnsignedShort
        * @param b {number}
        */
        public writeUnsignedShort(b: number): void;
        /**
        * @method egret.ByteArray#readUTFBytes
        * @param len {number}
        * @returns {string}
        */
        public readUTFBytes(len: number): string;
        /**
        * @method egret.ByteArray#readInt
        * @returns {number}
        */
        public readInt(): number;
        /**
        * @method egret.ByteArray#readShort
        * @returns {number}
        */
        public readShort(): number;
        /**
        * 从字节流中读取一个 IEEE 754 双精度（64 位）浮点数。
        * @method egret.ByteArray#readDouble
        * @returns {number} 返回双精度（64 位）浮点数。
        */
        public readDouble(): number;
        /**
        * @method egret.ByteArray#readUnsignedShort
        */
        public readUnsignedShort(): number;
        /**
        * @method egret.ByteArray#writeUnsignedInt
        * @param b {number}
        */
        public writeUnsignedInt(b: number): void;
        /**
        * 从字节流中读取一个无符号的 32 位整数。
        * 返回值的范围是从 0 到 4294967295。
        * @method egret.ByteArray#readUnsignedInt
        *  @returns {number} 介于 0 和 4294967295 之间的 32 位无符号整数。
        */
        public readUnsignedInt(): number;
        /**
        * @method egret.ByteArray#writeFloat
        * @param b {number}
        */
        public writeFloat(b: number): void;
        /**
        * 从字节流中读取一个 IEEE 754 单精度（32 位）浮点数。
        * @method egret.ByteArray#readFloat
        * @returns {number} 单精度（32 位）浮点数。
        */
        public readFloat(): number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Tween
    * @classdesc
    * Tween是Egret的动画缓动类
    * @extends egret.EventDispatcher
    */
    class Tween extends EventDispatcher {
        /**
        * @constant {any} egret.Tween.NONE
        */
        static NONE: number;
        /**
        * @constant {any} egret.Tween.LOOP
        */
        static LOOP: number;
        /**
        * @constant {any} egret.Tween.REVERSE
        */
        static REVERSE: number;
        private static _tweens;
        private static IGNORE;
        private static _plugins;
        private static _inited;
        private _target;
        private _useTicks;
        private ignoreGlobalPause;
        private loop;
        private pluginData;
        private _curQueueProps;
        private _initQueueProps;
        private _steps;
        private _actions;
        private paused;
        private duration;
        private _prevPos;
        private position;
        private _prevPosition;
        private _stepPosition;
        private passive;
        /**
        * 激活一个显示对象，对其添加 Tween 动画
        * @method egret.Tween.get
        * @param target {egret.DisplayObject} 要激活的显示对象
        */
        static get(target: any, props?: any, pluginData?: any, override?: boolean): Tween;
        /**
        * 删除一个显示对象上的全部 Tween 动画
        * @method egret.Tween.removeTweens
        * @param target {egret.DisplayObject}
        */
        static removeTweens(target: any): void;
        private static tick(delta, paused?);
        private static _register(tween, value);
        /**
        * @method egret.Tween.removeAllTweens
        */
        static removeAllTweens(): void;
        constructor(target: any, props: any, pluginData: any);
        private initialize(target, props, pluginData);
        private setPosition(value, actionsMode?);
        private _runActions(startPos, endPos, includeStart?);
        private _updateTargetProps(step, ratio);
        /**
        * @method egret.Tween#setPaused
        * @param value {boolean}
        * @returns {egret.Tween}
        */
        public setPaused(value: boolean): Tween;
        private _cloneProps(props);
        private _addStep(o);
        private _appendQueueProps(o);
        private _addAction(o);
        private _set(props, o);
        /**
        * 等待指定秒后执行下一个动画
        * @method egret.Tween#wait
        * @param duration {number} 要等待的时间，以秒为单位
        * @param passive {boolean}
        * @returns {egret.Tween}
        */
        public wait(duration: number, passive?: boolean): Tween;
        /**
        * 将指定显示对象的属性修改为指定值
        * @method egret.Tween#to
        * @param props {Object} 对象的属性集合
        * @param duration {number} 持续时间
        * @param ease {egret.Ease} 缓动算法
        * @returns {egret.Tween}
        */
        public to(props: any, duration: number, ease?: any): Tween;
        /**
        * 执行回调函数
        * @method egret.Tween#call
        * @param callback {Function}
        * @param thisObj {Object}
        * @param params {Object}
        * @returns {egret.Tween}
        */
        public call(callback: Function, thisObj?: any, params?: any): Tween;
        public set(props: any, target?: any): Tween;
        /**
        * @method egret.Tween#play
        * @param tween {egret.Tween}
        * @returns {egret.Tween}
        */
        public play(tween: Tween): Tween;
        /**
        * @method egret.Tween#pause
        * @param tween {egret.Tween}
        * @returns {egret.Tween}
        */
        public pause(tween: Tween): Tween;
        /**
        * @method egret.Tween#tick
        * @param delta {number}
        */
        public tick(delta: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class Ease {
        constructor();
        static get(amount: any): Function;
        static getPowIn(pow: any): Function;
        static getPowOut(pow: any): Function;
        static getPowInOut(pow: any): Function;
        static quadIn: Function;
        static quadOut: Function;
        static quadInOut: Function;
        static cubicIn: Function;
        static cubicOut: Function;
        static cubicInOut: Function;
        static quartIn: Function;
        static quartOut: Function;
        static quartInOut: Function;
        static quintIn: Function;
        static quintOut: Function;
        static quintInOut: Function;
        static sineIn(t: any): number;
        static sineOut(t: any): number;
        static sineInOut(t: any): number;
        static getBackIn(amount: any): Function;
        static backIn: Function;
        static getBackOut(amount: any): Function;
        static backOut: Function;
        static getBackInOut(amount: any): Function;
        static backInOut: Function;
        static circIn(t: any): number;
        static circOut(t: any): number;
        static circInOut(t: any): number;
        static bounceIn(t: any): number;
        static bounceOut(t: any): number;
        static bounceInOut(t: any): number;
        static getElasticIn(amplitude: any, period: any): Function;
        static elasticIn: Function;
        static getElasticOut(amplitude: any, period: any): Function;
        static elasticOut: Function;
        static getElasticInOut(amplitude: any, period: any): Function;
        static elasticInOut: Function;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.Sound
    * @classdesc Sound 类允许您在应用程序中使用声音。
    */
    class Sound {
        constructor();
        /**
        * audio音频对象
        * @member {any} egret.Sound#audio
        */
        public audio: any;
        /**
        * 播放声音
        * @method egret.Sound#play
        * @param loop {boolean} 是否循环播放，默认为false
        */
        public play(loop?: boolean): void;
        /**
        * 暂停声音
        * @method egret.Sound#pause
        */
        public pause(): void;
        /**
        * 重新加载声音
        * @method egret.Sound#load
        */
        public load(): void;
        /**
        * 添加事件监听
        * @param type 事件类型
        * @param listener 监听函数
        */
        public addEventListener(type: string, listener: Function): void;
        /**
        * 移除事件监听
        * @param type 事件类型
        * @param listener 监听函数
        */
        public removeEventListener(type: string, listener: Function): void;
        /**
        * 设置音量
        * @param value 值需大于0 小于等于 1
        */
        public setVolume(value: number): void;
        /**
        * 获取当前音量值
        * @returns number
        */
        public getVolume(): number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ICollection
    * @interface
    * @classdesc
    * 列表的集合类数据源对象接口
    * @extends egret.IEventDispatcher
    */
    interface ICollection extends IEventDispatcher {
        /**
        * 此集合中的项目数。0 表示不包含项目，而 -1 表示长度未知。
        * @member egret.gui.ICollection#length
        */ 
        length: number;
        /**
        * 获取指定索引处的项目。
        * @method egret.gui.ICollection#getItemAt
        * @throws RangeError 如果索引小于 0 或大于长度。
        * @param index {number}
        * @returns {any}
        */ 
        getItemAt(index: number): any;
        /**
        * 如果项目位于列表中,返回该项目的索引。否则返回-1。
        * @method egret.gui.ICollection#getItemIndex
        * @param item {any}
        * @returns {number}
        */ 
        getItemIndex(item: any): number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ArrayCollection
    * @classdesc
    * 数组的集合类数据结构包装器
    * 通常作为列表组件的数据源，使用这种数据结构包装普通数组，
    * 能在数据源发生改变的时候主动通知视图刷新变更的数据项
    * @extends egret.EventDispatcher
    * @implements egret.gui.ICollection
    */
    class ArrayCollection extends EventDispatcher implements ICollection {
        /**
        * 构造函数
        * @method egret.gui.ArrayCollection#constructor
        * @param source {Array<any>} 数据源
        */
        constructor(source?: any[]);
        private _source;
        /**
        * 数据源
        * 通常情况下请不要直接调用Array的方法操作数据源，否则对应的视图无法收到数据改变的通知。
        * 若对数据源进行了排序或过滤等操作，请手动调用refresh()方法刷新数据。<br/>
        * @member egret.gui.ArrayCollection#source
        */
        public source : any[];
        /**
        * 在对数据源进行排序或过滤操作后可以手动调用此方法刷新所有数据,以更新视图。
        * @method egret.gui.ArrayCollection#refresh
        */
        public refresh(): void;
        /**
        * 是否包含某项数据
        * @method egret.gui.ArrayCollection#contains
        * @param item {any}
        * @returns {boolean}
        */
        public contains(item: any): boolean;
        /**
        * 检测索引是否超出范围
        */
        private checkIndex(index);
        /**
        * @member egret.gui.ArrayCollection#length
        */
        public length : number;
        /**
        * 向列表末尾添加指定项目。等效于 addItemAt(item, length)。
        * @method egret.gui.ArrayCollection#addItem
        * @param item {any}
        */
        public addItem(item: any): void;
        /**
        * 在指定的索引处添加项目。
        * 任何大于已添加项目的索引的项目索引都会增加 1。
        * @method egret.gui.ArrayCollection#addItemAt
        * @throws RangeError 如果索引小于 0 或大于长度。
        * @param item {any}
        * @param index {number}
        */
        public addItemAt(item: any, index: number): void;
        /**
        * @method egret.gui.ArrayCollection#getItemAt
        * @param index {number}
        * @returns {any}
        */
        public getItemAt(index: number): any;
        /**
        * @method egret.gui.ArrayCollection#getItemIndex
        * @param item {any}
        * @returns {number}
        */
        public getItemIndex(item: any): number;
        /**
        * 通知视图，某个项目的属性已更新。
        * @method egret.gui.ArrayCollection#itemUpdated
        * @param item {any}
        */
        public itemUpdated(item: any): void;
        /**
        * 删除列表中的所有项目。
        * @method egret.gui.ArrayCollection#removeAll
        */
        public removeAll(): void;
        /**
        * 删除指定索引处的项目并返回该项目。原先位于此索引之后的所有项目的索引现在都向前移动一个位置。
        * @method egret.gui.ArrayCollection#removeItemAt
        * @throws RangeError 如果索引小于 0 或大于长度。
        * @param index {number}
        * @returns {any}
        */
        public removeItemAt(index: number): any;
        /**
        * 替换在指定索引处的项目，并返回该项目。
        * @method egret.gui.ArrayCollection#replaceItemAt
        * @throws RangeError 如果索引小于 0 或大于长度。
        * @param item {any}
        * @param index {number}
        * @returns {any}
        */
        public replaceItemAt(item: any, index: number): any;
        /**
        * 用新数据源替换原始数据源，此方法与直接设置source不同，它不会导致目标视图重置滚动位置。
        * @method egret.gui.ArrayCollection#replaceAll
        * @param newSource {Array<any>} 新的数据源
        */
        public replaceAll(newSource: any[]): void;
        /**
        * 移动一个项目
        * 在oldIndex和newIndex之间的项目，
        * 若oldIndex小于newIndex,索引会减1
        * 若oldIndex大于newIndex,索引会加1
        * @method egret.gui.ArrayCollection#moveItemAt
        * @param oldIndex {number}
        * @param newIndex {number}
        * @returns {any}
        * @throws RangeError 如果索引小于 0 或大于长度。
        */
        public moveItemAt(oldIndex: number, newIndex: number): any;
        /**
        * 抛出事件
        */
        private dispatchCoEvent(kind?, location?, oldLocation?, items?, oldItems?);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ITreeCollection
    * @interface
    * @classdesc
    * Tree组件的集合类数据源对象接口
    * @extends egret.gui.ICollection
    */
    interface ITreeCollection extends ICollection {
        /**
        * 检查指定的节点是否含有子节点
        * @method egret.gui.ITreeCollection#hasChildren
        * @param item {any} 要检查的节点
        * @returns {boolean}
        */ 
        hasChildren(item: any): boolean;
        /**
        * 指定的节点是否打开
        * @method egret.gui.ITreeCollection#isItemOpen
        * @param item {any}
        * @returns {boolean}
        */ 
        isItemOpen(item: any): boolean;
        /**
        * 打开或关闭一个节点
        * @method egret.gui.ITreeCollection#expandItem
        * @param item {any} 要打开或关闭的节点
        * @param open? {boolean} true表示打开节点，反之关闭。
        */ 
        expandItem(item: any, open?: boolean): void;
        /**
        * 获取节点的深度
        * @method egret.gui.ITreeCollection#getDepth
        * @param item {any}
        * @returns {number}
        */ 
        getDepth(item: any): number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ObjectCollection
    * @classdesc
    * Object的集合类数据结构包装器,通常作为Tree组件的数据源。
    * @extends egret.EventDispatcher
    * @implements egret.gui.ICollection
    * @implements egret.gui.ITreeCollection
    */
    class ObjectCollection extends EventDispatcher implements ICollection, ITreeCollection {
        /**
        * 构造函数
        * @method egret.gui.ObjectCollection#constructor
        * @param childrenKey {string} 要从item中获取子项列表的属性名,属性值为一个数组或Vector。
        * @param parentKey {string} 要从item中获取父级项的属性名
        */ 
        constructor(childrenKey?: string, parentKey?: string);
        /**
        * 要从item中获取子项列表的属性名
        */ 
        private childrenKey;
        /**
        * 要从item中获取父级项的属性名
        */ 
        private parentKey;
        private _source;
        /**
        * 数据源。注意：设置source会同时清空openNodes。
        * @member egret.gui.ObjectCollection#source
        */
        public source : any;
        /**
        * 要显示的节点列表
        */ 
        private nodeList;
        private _openNodes;
        /**
        * 处于展开状态的节点列表
        * @member egret.gui.ObjectCollection#openNodes
        */
        public openNodes : any[];
        /**
        * @member egret.gui.ObjectCollection#length
        */
        public length : number;
        /**
        * @method egret.gui.ObjectCollection#getItemAt
        * @param index {number}
        * @returns {any}
        */
        public getItemAt(index: number): any;
        /**
        * @method egret.gui.ObjectCollection#getItemIndex
        * @param item {any}
        * @returns {number}
        */
        public getItemIndex(item: any): number;
        /**
        * 通知视图，某个项目的属性已更新。
        * @method egret.gui.ObjectCollection#itemUpdated
        * @param item {any}
        */
        public itemUpdated(item: any): void;
        /**
        * 删除指定节点
        * @method egret.gui.ObjectCollection#removeItem
        * @param item {any}
        */
        public removeItem(item: any): void;
        private _showRoot;
        /**
        * 是否显示根节点,默认false。
        * @member egret.gui.ObjectCollection#showRoot
        */
        public showRoot : boolean;
        /**
        * 添加打开的节点到列表
        */ 
        private addChildren(parent, list);
        /**
        * @method egret.gui.ObjectCollection#hasChildren
        * @param item {any}
        * @returns {boolean}
        */ 
        public hasChildren(item: any): boolean;
        /**
        * @method egret.gui.ObjectCollection#isItemOpen
        * @param item {any}
        * @returns {boolean}
        */ 
        public isItemOpen(item: any): boolean;
        /**
        * @method egret.gui.ObjectCollection#expandItem
        * @param item {any}
        * @param open {boolean}
        */ 
        public expandItem(item: any, open?: boolean): void;
        /**
        * 打开一个节点
        */ 
        private openNode(item);
        /**
        * 关闭一个节点
        */ 
        private closeNode(item);
        /**
        * @method egret.gui.ObjectCollection#getDepth
        * @param item {any}
        * @returns {number}
        */ 
        public getDepth(item: any): number;
        /**
        * 刷新数据源。
        * @method egret.gui.ObjectCollection#refresh
        */ 
        public refresh(): void;
        /**
        * 抛出事件
        */ 
        private dispatchCoEvent(kind?, location?, oldLocation?, items?, oldItems?);
        /**
        * 一个工具方法，给parent的子项以及子孙项赋值父级引用。
        * @method egret.gui.ObjectCollection.assignParent
        * @param parent {any} 要遍历子项的parent对象。
        * @param childrenKey {string} 要从parent中获取子项列表的属性名,属性值为一个数组或Vector。
        * @param parentKey {string} 要给子项赋值父级引用的属性名。
        */
        static assignParent(parent: any, childrenKey?: string, parentKey?: string): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.LayoutManager
    * @classdesc
    * 布局管理器
    * @extends egret.EventDispatcher
    */
    class LayoutManager extends EventDispatcher {
        /**
        * @method egret.gui.LayoutManager#constructor
        */
        constructor();
        private targetLevel;
        /**
        * 需要抛出组件初始化完成事件的对象
        */ 
        private updateCompleteQueue;
        private invalidatePropertiesFlag;
        private invalidateClientPropertiesFlag;
        private invalidatePropertiesQueue;
        /**
        * 标记组件提交过属性
        * @method egret.gui.LayoutManager#invalidateProperties
        * @param client {ILayoutManagerClient}
        */ 
        public invalidateProperties(client: ILayoutManagerClient): void;
        /**
        * 使提交的属性生效
        */ 
        private validateProperties();
        private invalidateSizeFlag;
        private invalidateClientSizeFlag;
        private invalidateSizeQueue;
        /**
        * 标记需要重新测量尺寸
        * @method egret.gui.LayoutManager#invalidateSize
        * @param client {ILayoutManagerClient}
        */ 
        public invalidateSize(client: ILayoutManagerClient): void;
        /**
        * 测量属性
        */ 
        private validateSize();
        private invalidateDisplayListFlag;
        private invalidateDisplayListQueue;
        /**
        * 标记需要重新测量尺寸
        * @method egret.gui.LayoutManager#invalidateDisplayList
        * @param client {ILayoutManagerClient}
        */ 
        public invalidateDisplayList(client: ILayoutManagerClient): void;
        /**
        * 测量属性
        */ 
        private validateDisplayList();
        /**
        * 是否已经添加了事件监听
        */ 
        private listenersAttached;
        /**
        * 添加事件监听
        */ 
        private attachListeners();
        /**
        * 执行属性应用
        */ 
        private doPhasedInstantiationCallBack(event?);
        private doPhasedInstantiation();
        /**
        * 立即应用所有延迟的属性
        * @method egret.gui.LayoutManager#validateNow
        */ 
        public validateNow(): void;
        /**
        * 使大于等于指定组件层级的元素立即应用属性
        * @method egret.gui.LayoutManager#validateClient
        * @param target {ILayoutManagerClient} 要立即应用属性的组件
        * @param skipDisplayList {boolean} 是否跳过更新显示列表阶段
        */ 
        public validateClient(target: ILayoutManagerClient, skipDisplayList?: boolean): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.DepthQueue
    * @classdesc
    * 显示列表嵌套深度排序队列
    */
    class DepthQueue {
        /**
        * @method egret.gui.DepthQueue#constructor
        */
        constructor();
        /**
        * 深度队列
        */
        private depthBins;
        /**
        * 最小深度
        */
        private minDepth;
        /**
        * 最大深度
        */
        private maxDepth;
        /**
        * 插入一个元素
        * @method egret.gui.DepthQueue#insert
        * @param client {ILayoutManagerClient}
        */ 
        public insert(client: ILayoutManagerClient): void;
        /**
        * 从队列尾弹出深度最大的一个对象
        * @method egret.gui.DepthQueue#pop
        * @returns {ILayoutManagerClient}
        */ 
        public pop(): ILayoutManagerClient;
        /**
        * 从队列首弹出深度最小的一个对象
        * @method egret.gui.DepthQueue#shift
        * @returns {ILayoutManagerClient}
        */ 
        public shift(): ILayoutManagerClient;
        /**
        * 移除大于等于指定组件层级的元素中最大的元素
        * @method egret.gui.DepthQueue#removeLargestChild
        * @param client {ILayoutManagerClient}
        * @returns {any}
        */
        public removeLargestChild(client: ILayoutManagerClient): any;
        /**
        * 移除大于等于指定组件层级的元素中最小的元素
        * @method egret.gui.DepthQueue#removeSmallestChild
        * @param client {ILayoutManagerClient}
        * @returns {any}
        */
        public removeSmallestChild(client: ILayoutManagerClient): any;
        /**
        * 移除一个元素
        * @method egret.gui.DepthQueue#remove
        * @param client {ILayoutManagerClient}
        * @param level {number}
        * @returns {ILayoutManagerClient}
        */
        public remove(client: ILayoutManagerClient, level?: number): ILayoutManagerClient;
        /**
        * 清空队列
        * @method egret.gui.DepthQueue#removeAll
        */ 
        public removeAll(): void;
        /**
        * 队列是否为空
        * @method egret.gui.DepthQueue#isEmpty
        * @returns {boolean}
        */ 
        public isEmpty(): boolean;
    }
    /**
    * @class egret.DepthBin
    * @classdesc
    * 列表项
    */
    class DepthBin {
        /**
        * @member egret.DepthBin#length
        */
        public length: number;
        /**
        * @member egret.DepthBin#items
        */
        public items: any;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IAssetAdapter
    * @interface
    * @classdesc
    * 素材适配器接口。
    * 若项目需要自定义UIAsset.source的解析规则，需要实现这个接口，
    * 然后调用Injector.mapClass("egret.gui.IAssetAdapter",YourAssetAdapter)注入到框架即可。
    */
    interface IAssetAdapter {
        /**
        * 解析素材
        * @method egret.gui.IAssetAdapter#getAsset
        * @param source {any} 待解析的新素材标识符
        * @param compFunc {Function} 解析完成回调函数，示例：compFunc(content:any,source:any):void;
        * 回调参数content接受两种类型：DisplayObject或Texture。
        * @param thisObject {any} compFunc的this引用
        * @param oldContent any 旧的内容对象,传入值有可能为null。
        * 对于某些类型素材，例如MovieClip，可以重用传入的显示对象,只修改其数据再返回。
        */
        getAsset(source: any, compFunc: Function, thisObject: any, oldContent: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IContainer
    * @interface
    * @classdesc
    * 容器接口
    */
    interface IContainer {
        /**
        * 此容器中的可视元素的数量。
        * 可视元素包括实现 IVisualElement 接口的类，
        * @member egret.gui.IContainer#numElements
        */ 
        numElements: number;
        /**
        * 返回指定索引处的可视元素。
        * @method egret.gui.IContainer#getElementAt
        * @param index {number} 要检索的元素的索引。
        * @throws RangeError 如果在子列表中不存在该索引位置。
        * @returns {IVisualElement}
        */ 
        getElementAt(index: number): IVisualElement;
        /**
        * 将可视元素添加到此容器中。
        * 如果添加的可视元素已有一个不同的容器作为父项，则该元素将会从其他容器中删除。
        * @method egret.gui.IContainer#addElement
        * @param element {IVisualElement} 要添加为此容器的子项的可视元素。
        * @returns {IVisualElement}
        */ 
        addElement(element: IVisualElement): IVisualElement;
        /**
        * 将可视元素添加到此容器中。该元素将被添加到指定的索引位置。索引 0 代表显示列表中的第一个元素。
        * 如果添加的可视元素已有一个不同的容器作为父项，则该元素将会从其他容器中删除。
        * @method egret.gui.IContainer#addElementAt
        * @param element {IVisualElement} 要添加为此可视容器的子项的元素。
        * @param index {number} 将该元素添加到的索引位置。如果指定当前占用的索引位置，则该位置以及所有更高位置上的子对象会在子级列表中上移一个位置。
        * @throws RangeError 如果在子列表中不存在该索引位置。
        * @returns {IVisualElement}
        */ 
        addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
        * 从此容器的子列表中删除指定的可视元素。
        * 在该可视容器中，位于该元素之上的所有元素的索引位置都减少 1。
        * @method egret.gui.IContainer#removeElement
        * @param element {IVisualElement} 要从容器中删除的元素。
        * @returns {IVisualElement}
        */ 
        removeElement(element: IVisualElement): IVisualElement;
        /**
        * 从容器中的指定索引位置删除可视元素。
        * 在该可视容器中，位于该元素之上的所有元素的索引位置都减少 1。
        * @method egret.gui.IContainer#removeElementAt
        * @param index {number} 要删除的元素的索引。
        * @throws RangeError 如果在子列表中不存在该索引位置。
        * @returns {IVisualElement}
        */ 
        removeElementAt(index: number): IVisualElement;
        /**
        * 返回可视元素的索引位置。若不存在，则返回-1。
        * @method egret.gui.IContainer#getElementIndex
        * @param element {IVisualElement} 可视元素。
        * @returns {number}
        */ 
        getElementIndex(element: IVisualElement): number;
        /**
        * 在可视容器中更改现有可视元素的位置。
        * @method egret.gui.IContainer#setElementIndex
        * @param element {IVisualElement} 要为其更改索引编号的元素。
        * @param index {number} 元素的最终索引编号。
        * @throws RangeError 如果在子列表中不存在该索引位置。
        */ 
        setElementIndex(element: IVisualElement, index: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IDisplayText
    * @interface
    * @classdesc
    * 简单文本显示控件接口。
    * @extends egret.gui.IUIComponent
    */
    interface IDisplayText extends IUIComponent {
        /**
        * 此文本组件所显示的文本。
        * @member egret.gui.IDisplayText#text
        */
        text: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IEditableText
    * @interface
    * @classdesc
    * 可编辑文本控件接口
    * @extends egret.gui.IDisplayText
    */ 
    interface IEditableText extends IDisplayText {
        /**
        * 文本颜色。
        * @member egret.gui.IEditableText#textColor
        */
        textColor: number;
        /**
        * 指定文本字段是否是密码文本字段。如果此属性的值为 true，则文本字段被视为密码文本字段，
        * 并使用星号而不是实际字符来隐藏输入的字符。如果为 false，则不会将文本字段视为密码文本字段。
        * 启用密码模式时，“剪切”和“复制”命令及其对应的键盘快捷键将不起作用。
        * 此安全机制可防止不良用户使用快捷键在无人看管的计算机上破译密码。
        * @member egret.gui.IEditableText#displayAsPassword
        */ 
        displayAsPassword: boolean;
        /**
        * 文本是否可编辑的标志。
        * @member egret.gui.IEditableText#editable
        */ 
        editable: boolean;
        /**
        * 可视区域水平方向起始点
        * @member egret.gui.IEditableText#horizontalScrollPosition
        */ 
        horizontalScrollPosition: number;
        /**
        * 可视区域竖直方向起始点
        * @member egret.gui.IEditableText#verticalScrollPosition
        */
        verticalScrollPosition: number;
        /**
        * 文本字段中最多可包含的字符数（即用户输入的字符数）。
        * 脚本可以插入比 maxChars 允许的字符数更多的文本；maxChars 属性仅表示用户可以输入多少文本。
        * 如果此属性的值为 0，则用户可以输入无限数量的文本。
        * @member egret.gui.IEditableText#maxChars
        */ 
        maxChars: number;
        /**
        * 表示字段是否为多行文本字段。如果值为 true，则文本字段为多行文本字段；
        * 如果值为 false，则文本字段为单行文本字段。在类型为 TextFieldType.INPUT 的字段中，
        * multiline 值将确定 Enter 键是否创建新行（如果值为 false，则将忽略 Enter 键）。
        * 如果将文本粘贴到其 multiline 值为 false 的 TextField 中，则文本中将除去新行。
        * @member egret.gui.IEditableText#multiline
        */ 
        multiline: boolean;
        /**
        * 表示用户可输入到文本字段中的字符集。如果 restrict 属性的值为 null，则可以输入任何字符。
        * 如果 restrict 属性的值为空字符串，则不能输入任何字符。如果 restrict 属性的值为一串字符，
        * 则只能在文本字段中输入该字符串中的字符。从左向右扫描该字符串。可以使用连字符 (-) 指定一个范围。
        * 只限制用户交互；脚本可将任何文本放入文本字段中。此属性不与属性检查器中的“嵌入字体”选项同步。 <p/>
        * 如果字符串以尖号 (ˆ) 开头，则先接受所有字符，然后从接受字符集中排除字符串中 ˆ 之后的字符。
        * 如果字符串不以尖号 (ˆ) 开头，则最初不接受任何字符，然后将字符串中的字符包括在接受字符集中。
        * @member egret.gui.IEditableText#restrict
        */ 
        restrict: string;
        /**
        * 一个布尔值，表示文本字段是否可选。值 true 表示文本可选。selectable 属性控制文本字段是否可选，
        * 而不控制文本字段是否可编辑。动态文本字段即使不可编辑，它也可能是可选的。
        * 如果动态文本字段是不可选的，则用户不能选择其中的文本。 <p/>
        * 如果 selectable 设置为 false，则文本字段中的文本不响应来自鼠标或键盘的选择命令，
        * 并且不能使用“复制”命令复制文本。如果 selectable 设置为 true，则可以使用鼠标或键盘选择文本字段中的文本，
        * 并且可以使用“复制”命令复制文本。即使文本字段是动态文本字段而不是输入文本字段，您也可以用这种方式选择文本。
        * @member egret.gui.IEditableText#selectable
        */
        selectable: boolean;
        /**
        * 当前所选内容中第一个字符从零开始的字符索引值。例如，第一个字符的索引值是 0，第二个字符的索引值是 1，
        * 依此类推。如果未选定任何文本，此属性为 caretIndex 的值。
        * @member egret.gui.IEditableText#selectionBeginIndex
        */ 
        selectionBeginIndex: number;
        /**
        * 当前所选内容中最后一个字符从零开始的字符索引值。例如，第一个字符的索引值是 0，第二个字符的索引值是 1，
        * 依此类推。如果未选定任何文本，此属性为 caretIndex 的值。
        * @member egret.gui.IEditableText#selectionEndIndex
        */ 
        selectionEndIndex: number;
        /**
        * 插入点（尖号）位置的索引。如果没有显示任何插入点，则在将焦点恢复到字段时，
        * 值将为插入点所在的位置（通常为插入点上次所在的位置，如果字段不曾具有焦点，则为 0）。<p/>
        * 选择范围索引是从零开始的（例如，第一个位置为 0、第二个位置为 1，依此类推）。
        * @member egret.gui.IEditableText#caretIndex
        */ 
        caretIndex: number;
        /**
        * 将第一个字符和最后一个字符的索引值（使用 beginIndex 和 endIndex 参数指定）指定的文本设置为所选内容。
        * 如果两个参数值相同，则此方法会设置插入点，就如同设置 caretIndex 属性一样。
        * @method egret.gui.IEditableText#setSelection
        * @param beginIndex {number} 所选内容中第一个字符从零开始的索引值（例如，第一个字符的索引值是 0，第二个字符的索引值是 1，依此类推）。
        * @param endIndex {number} 所选内容中最后一个字符从零开始的索引值。
        */ 
        setSelection(beginIndex: number, endIndex: number): void;
        /**
        * 选中所有文本。
        * @method egret.gui.IEditableText#selectAll
        */ 
        selectAll(): void;
        /**
        * 控件的默认宽度（使用字号：size为单位测量）。 若同时设置了maxChars属性，将会根据两者测量结果的最小值作为测量宽度。
        * @member egret.gui.IEditableText#widthInChars
        */ 
        widthInChars: number;
        /**
        * 控件的默认高度（以行为单位测量）。 若设置了multiline属性为false，则忽略此属性。
        * @member egret.gui.IEditableText#heightInLines
        */ 
        heightInLines: number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @classdesc
    * IFactory 接口定义工厂类（如 ClassFactory）必须实现的接口。
    * IFactory 类型的对象是“工厂对象”，Egret使用它来生成另一类的多个实例（每个实例具有相同的属性）。
    * @interface
    * @class egret.gui.IFactory
    * @extends egret.IHashObject
    */
    interface IFactory extends IHashObject {
        /**
        * 创建某一类（由实现 IFactory 的类确定）的实例。
        * @method egret.gui.IFactory#newInstance
        * @returns {any}
        */
        newInstance(): any;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IInvalidateDisplay
    * @interface
    * @classdesc
    * 具有延迟应用属性功能的显示对象接口
    */
    interface IInvalidateDisplay {
        /**
        * 立即应用所有标记为延迟验证的属性
        * @method egret.gui.IInvalidateDisplay#validateNow
        */ 
        validateNow(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IInvalidating
    * @interface
    * @classdesc
    * 拥有失效验证机制组件接口
    */
    interface IInvalidating {
        /**
        * 标记提交过需要延迟应用的属性
        * @method egret.gui.IInvalidating#invalidateProperties
        */ 
        invalidateProperties(): void;
        /**
        * 标记提交过需要验证组件尺寸
        * @method egret.gui.IInvalidating#invalidateSize
        */ 
        invalidateSize(): void;
        /**
        * 标记需要验证显示列表
        * @method egret.gui.IInvalidating#invalidateDisplayList
        */ 
        invalidateDisplayList(): void;
        /**
        * 立即应用组件及其子项的所有属性
        * @method egret.gui.IInvalidating#validateNow
        * @param skipDisplayList? {boolean} 是否跳过显示列表验证阶段,默认false
        */ 
        validateNow(skipDisplayList?: boolean): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ILayoutElement
    * @interface
    * @classdesc
    * 可布局元素接口
    * @extends egret.IEventDispatcher
    */
    interface ILayoutElement extends IEventDispatcher {
        /**
        * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
        * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
        * @member egret.gui.ILayoutElement#includeInLayout
        */ 
        includeInLayout: boolean;
        /**
        * 距父级容器离左边距离
        * @member egret.gui.ILayoutElement#left
        */ 
        left: number;
        /**
        * 距父级容器右边距离
        * @member egret.gui.ILayoutElement#right
        */
        right: number;
        /**
        * 距父级容器顶部距离
        * @member egret.gui.ILayoutElement#top
        */
        top: number;
        /**
        * 距父级容器底部距离
        * @member egret.gui.ILayoutElement#bottom
        */ 
        bottom: number;
        /**
        * 在父级容器中距水平中心位置的距离
        * @member egret.gui.ILayoutElement#horizontalCenter
        */ 
        horizontalCenter: number;
        /**
        * 在父级容器中距竖直中心位置的距离
        * @member egret.gui.ILayoutElement#verticalCenter
        */ 
        verticalCenter: number;
        /**
        * 相对父级容器宽度的百分比
        * @member egret.gui.ILayoutElement#percentWidth
        */ 
        percentWidth: number;
        /**
        * 相对父级容器高度的百分比
        * @member egret.gui.ILayoutElement#percentHeight
        */ 
        percentHeight: number;
        /**
        * 组件的首选x坐标,常用于父级的measure()方法中
        * @member egret.gui.ILayoutElement#preferredX
        */ 
        preferredX: number;
        /**
        * 组件的首选y坐标,常用于父级的measure()方法中
        * @member egret.gui.ILayoutElement#preferredY
        */
        preferredY: number;
        /**
        * 组件水平方向起始坐标
        * @member egret.gui.ILayoutElement#layoutBoundsX
        */ 
        layoutBoundsX: number;
        /**
        * 组件竖直方向起始坐标
        * @member egret.gui.ILayoutElement#layoutBoundsY
        */ 
        layoutBoundsY: number;
        /**
        * 组件的首选宽度,常用于父级的measure()方法中
        * 按照：外部显式设置宽度>测量宽度 的优先级顺序返回宽度
        * 注意:此数值已经包含了scaleX的值
        * @member egret.gui.ILayoutElement#preferredWidth
        */ 
        preferredWidth: number;
        /**
        * 组件的首选高度,常用于父级的measure()方法中
        * 按照：外部显式设置高度>测量高度 的优先级顺序返回高度
        * 注意:此数值已经包含了scaleY的值
        * @member egret.gui.ILayoutElement#preferredHeight
        */
        preferredHeight: number;
        /**
        * 组件的布局宽度,常用于父级的updateDisplayList()方法中
        * 按照：布局宽度>外部显式设置宽度>测量宽度 的优先级顺序返回宽度
        * 注意:此数值已经包含了scaleX的值
        * @member egret.gui.ILayoutElement#layoutBoundsWidth
        */ 
        layoutBoundsWidth: number;
        /**
        * 组件的布局高度,常用于父级的updateDisplayList()方法中
        * 按照：布局高度>外部显式设置高度>测量高度 的优先级顺序返回高度
        * 注意:此数值已经包含了scaleY的值
        * @member egret.gui.ILayoutElement#layoutBoundsHeight
        */ 
        layoutBoundsHeight: number;
        /**
        * 表示从注册点开始应用的对象的水平缩放比例（百分比）。默认注册点为 (0,0)。1.0 等于 100% 缩放。
        * @member egret.gui.ILayoutElement#scaleX
        */ 
        scaleX: number;
        /**
        * 表示从对象注册点开始应用的对象的垂直缩放比例（百分比）。默认注册点为 (0,0)。1.0 是 100% 缩放。
        * @member egret.gui.ILayoutElement#scaleY
        */ 
        scaleY: number;
        /**
        * 组件的最大测量宽度,仅影响measuredWidth属性的取值范围。
        * @member egret.gui.ILayoutElement#maxWidth
        */ 
        maxWidth: number;
        /**
        * 组件的最小测量宽度,此属性设置为大于maxWidth的值时无效。仅影响measuredWidth属性的取值范围。
        * @member egret.gui.ILayoutElement#minWidth
        */
        minWidth: number;
        /**
        * 组件的最大测量高度,仅影响measuredHeight属性的取值范围。
        * @member egret.gui.ILayoutElement#maxHeight
        */
        maxHeight: number;
        /**
        * 组件的最小测量高度,此属性设置为大于maxHeight的值时无效。仅影响measuredHeight属性的取值范围。
        * @member egret.gui.ILayoutElement#minHeight
        */
        minHeight: number;
        /**
        * 设置组件的布局宽高,此值应已包含scaleX,scaleY的值
        * @method egret.gui.ILayoutElement#setLayoutBoundsSize
        * @param width {number}
        * @param height {number}
        */ 
        setLayoutBoundsSize(width: number, height: number): void;
        /**
        * 设置组件的布局位置
        * @method egret.gui.ILayoutElement#setLayoutBoundsPosition
        * @param x {number}
        * @param y {number}
        */ 
        setLayoutBoundsPosition(x: number, y: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ISkin
    * @interface
    * @classdesc
    * 皮肤对象接口。只有实现此接口的皮肤会被匹配公开同名变量,并注入到主机组件上。
    */
    interface ISkin {
        /**
        * 主机组件引用,仅当皮肤被应用后才会对此属性赋值
        * @member egret.gui.ISkin#hostComponent
        */ 
        hostComponent: SkinnableComponent;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ISkinAdapter
    * @interface
    * @classdesc
    * 皮肤适配器接口。
    * 若项目需要自定义可设置外观组件的skinName属性的解析规则，需要实现这个接口，
    * 然后调用Injector.mapClass("egret.gui.ISkinAdapter",YourSkinAdapter)注入到框架即可。
    */
    interface ISkinAdapter {
        /**
        * 获取皮肤显示对象
        * @method egret.gui.ISkinAdapter#getSkin
        * @param skinName {any} 待解析的皮肤标识符
        * @param hostComponentKey {string} 主机组件标识符
        * @returns {any} 皮肤对象实例
        */
        getSkin(skinName: any, hostComponentKey: string): any;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ISkinnableClient
    * @interface
    * @classdesc
    * 可设置外观的组件接口
    * @extends egret.gui.IVisualElement
    */
    interface ISkinnableClient extends IVisualElement {
        /**
        * 皮肤标识符。可以为Class,String,或DisplayObject实例等任意类型。
        * 具体规则由项目注入的ISkinAdapter决定，皮肤适配器将在运行时解析此标识符，然后返回皮肤对象给组件。
        * @member egret.gui.ISkinnableClient#skinName
        */ 
        skinName: any;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IStateClient
    * @interface
    * @classdesc
    * 具有视图状态的组件接口
    * @extends egret.IEventDispatcher
    */
    interface IStateClient extends IEventDispatcher {
        /**
        * 组件的当前视图状态。将其设置为 "" 或 null 可将组件重置回其基本状态。
        * @member egret.gui.IStateClient#currentState
        */ 
        currentState: string;
        /**
        * 为此组件定义的视图状态。
        * @member egret.gui.IStateClient#states
        */ 
        states: any[];
        /**
        * 返回是否含有指定名称的视图状态
        * @method egret.gui.IStateClient#hasState
        * @param stateName {string} 要检测的视图状态名称
        * @returns {boolean}
        */ 
        hasState(stateName: string): boolean;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IUIComponent
    * @interface
    * @classdesc
    * UI组件接口
    * @extends egret.gui.IVisualElement
    */ 
    interface IUIComponent extends IVisualElement {
        /**
        * 组件是否可以接受用户交互。
        * @member egret.gui.IUIComponent#enabled
        */
        enabled: boolean;
        /**
        * PopUpManager将其设置为true,以指示已弹出该组件。
        * @member egret.gui.IUIComponent#isPopUp
        */
        isPopUp: boolean;
        /**
        * 外部显式指定的高度
        * @member egret.gui.IUIComponent#explicitHeight
        */
        explicitHeight: number;
        /**
        * 外部显式指定的宽度
        * @member egret.gui.IUIComponent#explicitWidth
        */
        explicitWidth: number;
        /**
        * 设置组件的宽高，w,h均不包含scale值。此方法不同于直接设置width,height属性，
        * 不会影响显式标记尺寸属性widthExplicitlySet,_heightExplicitlySet
        * @method egret.gui.IUIComponent#setActualSize
        * @param newWidth {number}
        * @param newHeight {number}
        */ 
        setActualSize(newWidth: number, newHeight: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IUIStage
    * @interface
    * @classdesc
    * @extends egret.IEventDispatcher
    */
    interface IUIStage extends IEventDispatcher {
        /**
        * 弹出窗口层容器。
        * @member egret.gui.IUIStage#popUpContainer
        */ 
        popUpContainer: IContainer;
        /**
        * 工具提示层容器。
        * @member egret.gui.IUIStage#toolTipContainer
        */ 
        toolTipContainer: IContainer;
        /**
        * 鼠标样式层容器。
        * @member egret.gui.IUIStage#cursorContainer
        */ 
        cursorContainer: IContainer;
        /**
        * 舞台引用
        * @member egret.gui.IUIStage#stage
        */ 
        stage: Stage;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IViewport
    * @interface
    * @classdesc
    * 支持视区的组件接口
    * @extends egret.gui.IVisualElement
    */ 
    interface IViewport extends IVisualElement {
        /**
        * 视域的内容的宽度。
        * 如果 clipAndEnabledScrolling 为 true， 则视域的 contentWidth 为水平滚动定义限制，
        * 且视域的实际宽度定义可见的内容量。要在内容中水平滚动， 请在 0 和 contentWidth - width
        * 之间更改 horizontalScrollPosition。
        * @member egret.gui.IViewport#contentWidth
        */ 
        contentWidth: number;
        /**
        * 视域的内容的高度。
        * 如果 clipAndEnabledScrolling 为 true，则视域的 contentHeight 为垂直滚动定义限制，
        * 且视域的实际高度定义可见的内容量。要在内容中垂直滚动，请在 0 和 contentHeight - height
        * 之间更改 verticalScrollPosition。
        * @member egret.gui.IViewport#contentHeight
        */ 
        contentHeight: number;
        /**
        * 可视区域水平方向起始点
        * @member egret.gui.IViewport#horizontalScrollPosition
        */ 
        horizontalScrollPosition: number;
        /**
        * 可视区域竖直方向起始点
        * @member egret.gui.IViewport#verticalScrollPosition
        */ 
        verticalScrollPosition: number;
        /**
        * 如果为 true，指定将子代剪切到视区的边界。如果为 false，则容器子代会从容器边界扩展过去，而不管组件的大小规范。默认false
        * @member egret.gui.IViewport#clipAndEnableScrolling
        */ 
        clipAndEnableScrolling: boolean;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IViewStack
    * @interface
    * @classdesc
    * 层级堆叠容器接口
    */
    interface IViewStack {
        /**
        * 当前可见子元素的索引。索引从0开始。
        * @member egret.gui.IViewStack#selectedIndex
        */ 
        selectedIndex: number;
        /**
        * 当前可见的子元素。
        * @member egret.gui.IViewStack#selectedChild
        */
        selectedChild: IVisualElement;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IVisualElement
    * @interface
    * @classdesc
    * 可视元素接口
    * @extends egret.gui.ILayoutElement
    */ 
    interface IVisualElement extends ILayoutElement {
        /**
        * 此IVisualElement对象的所有者。<br/>
        * 0.默认情况下，owner指向parent属性的值。<br/>
        * 1.当此对象被PopUpAnchor组件弹出时，owner指向PopUpAnchor<br/>
        * 2.当此对象作为皮肤内contentGroup的子项时，owner指向主机组件SkinnableContainer<br/>
        * 3.当此对象作为ItemRenderer时，owner指向DataGroup或者主机组件SkinnableDataContainer<br/>
        * 4.当此对象作为非显示对象容器IContainer的子项时,owner指向IContainer。
        * @member egret.gui.IVisualElement#owner
        */ 
        owner: any;
        /**
        * owner属性由框架内部管理，请不要自行改变它的值，否则可能引发未知的问题。
        * @method egret.gui.IVisualElement#ownerChanged
        * @param value {Object}
        */ 
        ownerChanged(value: Object): void;
        /**
        * 元素名称。此属性在TabNavigator里作为选项卡显示的字符串。
        * @member egret.gui.IVisualElement#name
        */ 
        name: string;
        /**
        * 此组件的父容器或组件。
        * 只有可视元素应该具有 parent 属性。
        * 非可视项目应该使用其他属性引用其所属对象。
        * 一般而言，非可视对象使用 owner 属性引用其所属对象。
        * @member egret.gui.IVisualElement#parent
        */
        parent: DisplayObjectContainer;
        /**
        * 控制此可视元素的可见性。如果为 true，则对象可见。
        * @member egret.gui.IVisualElement#visible
        */ 
        visible: boolean;
        /**
        * 表示指定对象的 Alpha 透明度值。有效值为 0（完全透明）到 1（完全不透明）。默认值为 1。alpha 设置为 0 的显示对象是活动的，即使它们不可见。
        * @member egret.gui.IVisualElement#alpha
        */ 
        alpha: number;
        /**
        * 组件宽度
        * @member egret.gui.IVisualElement#width
        */ 
        width: number;
        /**
        * 组件高度
        * @member egret.gui.IVisualElement#height
        */ 
        height: number;
        /**
        * 表示 DisplayObject 实例相对于父级 DisplayObjectContainer 本地坐标的 x 坐标。
        * 如果该对象位于具有变形的 DisplayObjectContainer 内，则它也位于包含 DisplayObjectContainer
        * 的本地坐标系中。因此，对于逆时针旋转 90 度的 DisplayObjectContainer，该 DisplayObjectContainer
        * 的子级将继承逆时针旋转 90 度的坐标系。对象的坐标指的是注册点的位置。
        * @constant egret.gui.IVisualElement#x
        */ 
        x: number;
        /**
        * 表示 DisplayObject 实例相对于父级 DisplayObjectContainer 本地坐标的 y 坐标。
        * 如果该对象位于具有变形的 DisplayObjectContainer 内，则它也位于包含 DisplayObjectContainer
        * 的本地坐标系中。因此，对于逆时针旋转 90 度的 DisplayObjectContainer，该 DisplayObjectContainer
        * 的子级将继承逆时针旋转 90 度的坐标系。对象的坐标指的是注册点的位置。
        * @constant egret.gui.IVisualElement#y
        */ 
        y: number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IVisualElementContainer
    * @interface
    * @classdesc
    * 具有管理IVisualElement子显示对象的容器接口
    * @extends egret.gui.IVisualElement
    * @extends egret.gui.IContainer
    */ 
    interface IVisualElementContainer extends IVisualElement, IContainer {
        /**
        * 从容器中删除所有可视元素。
        * @method egret.gui.IVisualElementContainer#removeAllElements
        */ 
        removeAllElements(): void;
        /**
        * 交换两个指定可视元素的索引。所有其他元素仍位于相同的索引位置。
        * @method egret.gui.IVisualElementContainer#swapElements
        * @param element1 {IVisualElement} 第一个可视元素。
        * @param element2 {IVisualElement} 第二个可视元素。
        */ 
        swapElements(element1: IVisualElement, element2: IVisualElement): void;
        /**
        * 交换容器中位于两个指定索引位置的可视元素。所有其他可视元素仍位于相同的索引位置。
        * @method egret.gui.IVisualElementContainer#swapElementsAt
        * @param index1 {number} 第一个元素的索引。
        * @param index2 {number} 第二个元素的索引。
        * @throws RangeError 如果在子列表中不存在该索引位置。
        */ 
        swapElementsAt(index1: number, index2: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ILayoutManagerClient
    * @interface
    * @classdesc
    * 使用布局管理器的组件接口
    * @extends egret.IEventDispatcher
    */
    interface ILayoutManagerClient extends IEventDispatcher {
        /**
        * 验证组件的属性
        * @method egret.gui.ILayoutManagerClient#validateProperties
        */ 
        validateProperties(): void;
        /**
        * 验证组件的尺寸
        * @method egret.gui.ILayoutManagerClient#validateSize
        * @param recursive? {boolean}
        */ 
        validateSize(recursive?: boolean): void;
        /**
        * 验证子项的位置和大小，并绘制其他可视内容
        * @method egret.gui.ILayoutManagerClient#validateDisplayList
        */ 
        validateDisplayList(): void;
        /**
        * 在显示列表的嵌套深度
        * @member egret.gui.ILayoutManagerClient#nestLevel
        */ 
        nestLevel: number;
        /**
        * 是否完成初始化。此标志只能由 LayoutManager 修改。
        * @member egret.gui.ILayoutManagerClient#initialized
        */ 
        initialized: boolean;
        /**
        * 一个标志，用于确定某个对象是否正在等待分派其updateComplete事件。此标志只能由 LayoutManager 修改。
        * @member egret.gui.ILayoutManagerClient#updateCompletePendingFlag
        */ 
        updateCompletePendingFlag: boolean;
        /**
        * 父级显示对象
        * @member egret.gui.ILayoutManagerClient#parent
        */ 
        parent: DisplayObjectContainer;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IPopUpManager
    * @interface
    * @classdesc
    * 窗口弹出管理器接口。若项目需要自定义弹出框管理器，请实现此接口，
    * 并在项目初始化前调用Injector.mapClass("egret.gui.IPopUpManager",YourPopUpManager)，
    * 注入自定义的弹出框管理器类。
    * @extends egret.IEventDispatcher
    */
    interface IPopUpManager extends IEventDispatcher {
        /**
        * 模态遮罩的填充颜色
        * @member egret.gui.IPopUpManager#modalColor
        */
        modalColor: number;
        /**
        * 模态遮罩的透明度
        * @member egret.gui.IPopUpManager#modalAlpha
        */
        modalAlpha: number;
        /**
        * 弹出一个窗口。<br/>
        * @method egret.gui.IPopUpManager#addPopUp
        * @param popUp {IVisualElement} 要弹出的窗口
        * @param modal? {boolean} 是否启用模态。即禁用弹出窗口所在层以下的鼠标事件。默认false。
        * @param center? {boolean} 是否居中窗口。等效于在外部调用centerPopUp()来居中。默认true。
        */ 
        addPopUp(popUp: IVisualElement, modal?: boolean, center?: boolean): void;
        /**
        * 移除由addPopUp()方法弹出的窗口。
        * @method egret.gui.IPopUpManager#removePopUp
        * @param popUp {IVisualElement} 要移除的窗口
        */ 
        removePopUp(popUp: IVisualElement): void;
        /**
        * 将指定窗口居中显示
        * @method egret.gui.IPopUpManager#centerPopUp
        * @param popUp {IVisualElement} 要居中显示的窗口
        */
        centerPopUp(popUp: IVisualElement): void;
        /**
        * 将指定窗口的层级调至最前
        * @method egret.gui.IPopUpManager#bringToFront
        * @param popUp {IVisualElement} 要最前显示的窗口
        */ 
        bringToFront(popUp: IVisualElement): void;
        /**
        * 已经弹出的窗口列表
        * @member egret.gui.IPopUpManager#popUpList
        */ 
        popUpList: any[];
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.UIGlobals
    * @classdesc
    */
    class UIGlobals {
        private static _stage;
        /**
        * 舞台引用，当第一个UIComponent添加到舞台时此属性被自动赋值
        * @member egret.gui.UIGlobals.stage
        */ 
        static stage : Stage;
        /**
        * 已经初始化完成标志
        */ 
        private static initlized;
        /**
        * 初始化管理器
        * @method egret.gui.UIGlobals._initlize
        * @param stage {Stage}
        */ 
        static _initlize(stage: Stage): void;
        /**
        * 延迟渲染布局管理器
        * @member egret.gui.UIGlobals._layoutManager
        */ 
        static _layoutManager: LayoutManager;
        /**
        * 系统管理器列表
        */ 
        static _uiStage: IUIStage;
        /**
        * 顶级应用容器
        * @member egret.gui.UIGlobals.uiStage
        */
        static uiStage : IUIStage;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.UIComponent
    * @classdesc
    * 显示对象基类
    * @extends egret.DisplayObjectContainer
    * @implements egret.gui.IUIComponent
    * @implements egret.gui.ILayoutManagerClient
    * @implements egret.gui.ILayoutElement
    * @implements egret.gui.IInvalidating
    * @implements egret.gui.IVisualElement
    */
    class UIComponent extends DisplayObjectContainer implements IUIComponent, ILayoutManagerClient, ILayoutElement, IInvalidating, IVisualElement {
        /**
        * 构造函数
        * @method egret.gui.UIComponent#constructor
        */ 
        constructor();
        /**
        * 添加到舞台
        */ 
        private onAddedToStage(e);
        private _id;
        /**
        * 组件 ID。此值将作为对象的实例名称，因此不应包含任何空格或特殊字符。应用程序中的每个组件都应具有唯一的 ID。
        * @constant egret.gui.UIComponent#id
        */ 
        public id : string;
        private _isPopUp;
        /**
        * @member egret.gui.UIComponent#isPopUp
        */
        public isPopUp : boolean;
        private _owner;
        /**
        * @member egret.gui.UIComponent#owner
        */
        public owner : any;
        /**
        * @method egret.gui.UIComponent#ownerChanged
        * @param value {any}
        */
        public ownerChanged(value: any): void;
        private _updateCompletePendingFlag;
        /**
        * @member egret.gui.UIComponent#updateCompletePendingFlag
        */ 
        public updateCompletePendingFlag : boolean;
        private _initialized;
        /**
        * @member egret.gui.UIComponent#initialized
        */
        public initialized : boolean;
        /**
        * _initialize()方法被调用过的标志。
        */ 
        private initializeCalled;
        /**
        * 初始化组件
        * @method egret.gui.UIComponent#_initialize
        */
        public _initialize(): void;
        /**
        * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
        * 请务必调用super.createChildren()以完成父类组件的初始化
        * @method egret.gui.UIComponent#createChildren
        */ 
        public createChildren(): void;
        /**
        * 子项创建完成
        * @method egret.gui.UIComponent#childrenCreated
        */ 
        private childrenCreated();
        private _nestLevel;
        /**
        * @member egret.gui.UIComponent#nestLevel
        */ 
        public nestLevel : number;
        /**
        * 添加对象到显示列表,此接口仅预留给框架内部使用
        * 如果需要管理子项，若有，请使用容器的addElement()方法，非法使用有可能造成无法自动布局。
        */
        public _addToDisplayList(child: DisplayObject, notifyListeners?: boolean): DisplayObject;
        /**
        * 添加对象到显示列表,此接口仅预留给框架内部使用
        * 如果需要管理子项，若有，请使用容器的addElementAt()方法，非法使用有可能造成无法自动布局。
        */
        public _addToDisplayListAt(child: DisplayObject, index: number, notifyListeners?: boolean): DisplayObject;
        /**
        * 添加对象到显示列表,此接口仅预留给框架内部使用
        * 如果需要管理子项，若有，请使用容器的removeElement()方法,非法使用有可能造成无法自动布局。
        */
        public _removeFromDisplayList(child: DisplayObject, notifyListeners?: boolean): DisplayObject;
        /**
        * 从显示列表移除指定索引的子项,此接口仅预留给框架内部使用
        * 如果需要管理子项，若有，请使用容器的removeElementAt()方法,非法使用有可能造成无法自动布局。
        */
        public _removeFromDisplayListAt(index: number, notifyListeners?: boolean): DisplayObject;
        /**
        * GUI范围内，请不要调用任何addChild方法，若是容器，请用addElement,若需要包装普通显示对象，请把显示对象赋值给UIAsset.source。
        * @deprecated
        * @method egret.gui.UIComponent#addChild
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */
        public addChild(child: DisplayObject): DisplayObject;
        /**
        * GUI范围内，请不要调用任何addChildAt方法，若是容器，请用addElementAt,若需要包装普通显示对象，请把显示对象赋值给UIAsset.source。
        * @deprecated
        * @method egret.gui.UIComponent#addChildAt
        * @param child {DisplayObject}
        * @param index {number}
        * @returns {DisplayObject}
        */
        public addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
        * 即将添加一个子项
        * @method egret.gui.UIComponent#_addingChild
        * @param child {DisplayObject}
        */ 
        public _addingChild(child: DisplayObject): void;
        /**
        * 已经添加一个子项
        */ 
        public _childAdded(child: DisplayObject): void;
        /**
        * GUI范围内，请不要调用任何removeChild方法，若是容器，请用removeElement
        * @deprecated
        * @method egret.gui.UIComponent#removeChild
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */
        public removeChild(child: DisplayObject): DisplayObject;
        /**
        * GUI范围内，请不要调用任何removeChildAt方法，若是容器，请用removeElementAt
        * @deprecated
        * @method egret.gui.UIComponent#removeChildAt
        * @param index {number}
        * @returns {DisplayObject}
        */
        public removeChildAt(index: number): DisplayObject;
        /**
        * 已经移除一个子项
        */
        public _childRemoved(child: DisplayObject): void;
        /**
        * 检查属性失效标记并应用
        */ 
        private checkInvalidateFlag(event?);
        public _enabled: boolean;
        /**
        * @member egret.gui.UIComponent#enabled
        */
        public enabled : boolean;
        /**
        * 属性提交前组件旧的宽度
        */ 
        private oldWidth;
        public _width: number;
        public _setWidth(value: number): void;
        /**
        * @member egret.gui.UIComponent#width
        */
        /**
        * 组件宽度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
        */ 
        public width : number;
        /**
        * 属性提交前组件旧的高度
        */
        private oldHeight;
        public _height: number;
        public _setHeight(value: number): void;
        /**
        * @member egret.gui.UIComponent#height
        */
        /**
        * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
        */ 
        public height : number;
        /**
        * @member egret.gui.UIComponent#scaleX
        */
        /**
        * @inheritDoc
        */
        public scaleX : number;
        public _setScaleX(value: number): void;
        /**
        * @member egret.gui.UIComponent#scaleY
        */
        /**
        * @inheritDoc
        */
        public scaleY : number;
        public _setScaleY(value: number): void;
        private _minWidth;
        /**
        * @member egret.gui.UIComponent#minWidth
        */
        public minWidth : number;
        private _maxWidth;
        /**
        * @member egret.gui.UIComponent#maxWidth
        */
        public maxWidth : number;
        private _minHeight;
        /**
        * @member egret.gui.UIComponent#minHeight
        */
        public minHeight : number;
        private _maxHeight;
        /**
        * @member egret.gui.UIComponent#maxHeight
        */
        public maxHeight : number;
        private _measuredWidth;
        /**
        * 组件的默认宽度（以像素为单位）。此值由 measure() 方法设置。
        * @member egret.gui.UIComponent#measuredWidth
        */ 
        public measuredWidth : number;
        private _measuredHeight;
        /**
        * 组件的默认高度（以像素为单位）。此值由 measure() 方法设置。
        * @member egret.gui.UIComponent#measuredHeight
        */
        public measuredHeight : number;
        /**
        * @method egret.gui.UIComponent#setActualSize
        * @param w {number}
        * @param h {number}
        */
        public setActualSize(w: number, h: number): void;
        /**
        * 属性提交前组件旧的X
        * @member egret.gui.UIComponent#oldX
        */
        private oldX;
        /**
        * @constant egret.gui.UIComponent#x
        */
        /**
        * @inheritDoc
        */
        public x : number;
        /**
        * 属性提交前组件旧的Y
        * @member egret.gui.UIComponent#oldY
        */
        private oldY;
        /**
        * @constant egret.gui.UIComponent#y
        */
        /**
        * @inheritDoc
        */
        public y : number;
        /**
        * @member egret.gui.UIComponent#_invalidatePropertiesFlag
        */
        public _invalidatePropertiesFlag: boolean;
        /**
        * @method egret.gui.UIComponent#invalidateProperties
        */ 
        public invalidateProperties(): void;
        /**
        * @method egret.gui.UIComponent#validateProperties
        */ 
        public validateProperties(): void;
        /**
        * @member egret.gui.UIComponent#_invalidateSizeFlag
        */
        public _invalidateSizeFlag: boolean;
        /**
        * @method egret.gui.UIComponent#invalidateSize
        */ 
        public invalidateSize(): void;
        /**
        * @method egret.gui.UIComponent#validateSize
        * @param recursive {boolean}
        */ 
        public validateSize(recursive?: boolean): void;
        /**
        * 上一次测量的首选宽度
        * @member egret.gui.UIComponent#_oldPreferWidth
        */ 
        public _oldPreferWidth: number;
        /**
        * 上一次测量的首选高度
        * @member egret.gui.UIComponent#_oldPreferHeight
        */ 
        public _oldPreferHeight: number;
        /**
        * 测量组件尺寸，返回尺寸是否发生变化
        */ 
        private measureSizes();
        /**
        * @member egret.gui.UIComponent#_invalidateDisplayListFlag
        */
        public _invalidateDisplayListFlag: boolean;
        /**
        * @method egret.gui.UIComponent#invalidateDisplayList
        */ 
        public invalidateDisplayList(): void;
        /**
        * @method egret.gui.UIComponent#validateDisplayList
        */ 
        public validateDisplayList(): void;
        /**
        * @member egret.gui.UIComponent#_validateNowFlag
        */
        public _validateNowFlag: boolean;
        /**
        * @method egret.gui.UIComponent#validateNow
        * @param skipDisplayList {boolean}
        */ 
        public validateNow(skipDisplayList?: boolean): void;
        /**
        * 标记父级容器的尺寸和显示列表为失效
        * @method egret.gui.UIComponent#invalidateParentSizeAndDisplayList
        */ 
        public invalidateParentSizeAndDisplayList(): void;
        /**
        * 更新显示列表
        * @method egret.gui.UIComponent#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */ 
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
        * 是否可以跳过测量尺寸阶段,返回true则不执行measure()方法
        * @method egret.gui.UIComponent#canSkipMeasurement
        * @returns {boolean}
        */ 
        public canSkipMeasurement(): boolean;
        /**
        * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
        * @method egret.gui.UIComponent#commitProperties
        */ 
        public commitProperties(): void;
        /**
        * 测量组件尺寸
        * @method egret.gui.UIComponent#measure
        */ 
        public measure(): void;
        /**
        *  抛出移动事件
        */
        private dispatchMoveEvent();
        /**
        * 子项的xy位置发生改变
        */
        public _childXYChanged(): void;
        /**
        *  抛出尺寸改变事件
        */
        private dispatchResizeEvent();
        public _includeInLayout: boolean;
        /**
        * @member egret.gui.UIComponent#includeInLayout
        */
        public includeInLayout : boolean;
        private _left;
        /**
        * @member egret.gui.UIComponent#left
        */
        public left : number;
        private _right;
        /**
        * @member egret.gui.UIComponent#right
        */
        public right : number;
        private _top;
        /**
        * @member egret.gui.UIComponent#top
        */
        public top : number;
        private _bottom;
        /**
        * @member egret.gui.UIComponent#bottom
        */ 
        public bottom : number;
        private _horizontalCenter;
        /**
        * @member egret.gui.UIComponent#horizontalCenter
        */
        public horizontalCenter : number;
        private _verticalCenter;
        /**
        * @member egret.gui.UIComponent#verticalCenter
        */
        public verticalCenter : number;
        private _percentWidth;
        /**
        * @member egret.gui.UIComponent#percentWidth
        */
        public percentWidth : number;
        private _percentHeight;
        /**
        * @member egret.gui.UIComponent#percentHeight
        */
        public percentHeight : number;
        /**
        * 父级布局管理器设置了组件的宽度标志，尺寸设置优先级：自动布局>显式设置>自动测量
        * @member egret.gui.UIComponent#_layoutWidthExplicitlySet
        */
        public _layoutWidthExplicitlySet: boolean;
        /**
        * 父级布局管理器设置了组件的高度标志，尺寸设置优先级：自动布局>显式设置>自动测量
        * @member egret.gui.UIComponent#_layoutHeightExplicitlySet
        */
        public _layoutHeightExplicitlySet: boolean;
        /**
        * @method egret.gui.UIComponent#setLayoutBoundsSize
        * @param layoutWidth {number}
        * @param layoutHeight {number}
        */ 
        public setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
        * @method egret.gui.UIComponent#setLayoutBoundsPosition
        * @param x {number}
        * @param y {number}
        */ 
        public setLayoutBoundsPosition(x: number, y: number): void;
        /**
        * @member egret.gui.UIComponent#preferredWidth
        */ 
        public preferredWidth : number;
        /**
        * @member egret.gui.UIComponent#preferredHeight
        */
        public preferredHeight : number;
        /**
        * @member egret.gui.UIComponent#preferredX
        */ 
        public preferredX : number;
        /**
        * @member egret.gui.UIComponent#preferredY
        */
        public preferredY : number;
        /**
        * @member egret.gui.UIComponent#layoutBoundsX
        */
        public layoutBoundsX : number;
        /**
        * @member egret.gui.UIComponent#layoutBoundsY
        */
        public layoutBoundsY : number;
        /**
        * @member egret.gui.UIComponent#layoutBoundsWidth
        */ 
        public layoutBoundsWidth : number;
        /**
        * 组件的布局高度,常用于父级的updateDisplayList()方法中
        * 按照：布局高度>外部显式设置高度>测量高度 的优先级顺序返回高度
        * @member egret.gui.UIComponent#layoutBoundsHeight
        */ 
        public layoutBoundsHeight : number;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.PopUpPosition
    * @classdesc
    * 定义弹出位置的常量值。
    * 该常量决定目标对象相对于父级组件的弹出位置。
    */ 
    class PopUpPosition {
        /**
        * 在组件上方弹出
        * @constant egret.gui.PopUpPosition.ABOVE
        */ 
        static ABOVE: string;
        /**
        * 在组件下方弹出
        * @constant egret.gui.PopUpPosition.BELOW
        */ 
        static BELOW: string;
        /**
        * 在组件中心弹出
        * @constant egret.gui.PopUpPosition.CENTER
        */ 
        static CENTER: string;
        /**
        * 在组件左上角弹出
        * @constant egret.gui.PopUpPosition.TOP_LEFT
        */ 
        static TOP_LEFT: string;
        /**
        * 在组件左边弹出
        * @constant egret.gui.PopUpPosition.LEFT
        */ 
        static LEFT: string;
        /**
        * 在组件右边弹出
        * @constant egret.gui.PopUpPosition.RIGHT
        */ 
        static RIGHT: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ScrollPolicy
    * @classdesc
    * 滚动条显示策略常量
    */
    class ScrollPolicy {
        /**
        * 如果子项超出父级的尺寸，则允许滚动，反之不允许滚动。
        * @constant egret.gui.ScrollPolicy.AUTO
        */ 
        static AUTO: string;
        /**
        * 从不允许滚动。
        * @constant egret.gui.ScrollPolicy.OFF
        */ 
        static OFF: string;
        /**
        * 总是允许滚动。
        * @constant egret.gui.ScrollPolicy.ON
        */
        static ON: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ClassFactory
    * @classdesc
    * @extends egret.HashObject
    */
    class ClassFactory extends HashObject {
        /**
        * @method egret.gui.ClassFactory#constructor
        * @class egret.gui.ClassFactory
        * @classdesc
        * ClassFactory 实例是一个“工厂对象”，Egret 可用其生成其他类的实例，每个实例拥有相同的属性。
        * @param generator {any} newInstance() 方法根据工厂对象生成对象时使用的 Class。
        */
        constructor(generator?: any);
        /**
        * newInstance() 方法根据工厂对象生成对象时使用的 Class。
        * @member egret.egret#generator
        */
        public generator: any;
        /**
        * 生产一个新的实例
        * @method egret.egret#newInstance
        * @returns {any}
        */
        public newInstance(): any;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IOverride
    * @interface
    * @classdesc
    * IOverride 接口用于视图状态覆盖。State 类 overrides 属性数组中的所有条目均必须实现此接口。
    */ 
    interface IOverride {
        /**
        * 初始化覆盖。在第一次调用 apply() 方法之前调用此方法，因此将覆盖的一次性初始化代码放在此方法中。
        * @method egret.gui.IOverride#initialize
        * @param parent {IStateClient}
        */ 
        initialize(parent: IStateClient): void;
        /**
        * 应用覆盖。将保留原始值，以便以后可以在 remove() 方法中恢复该值。
        * @method egret.gui.IOverride#apply
        * @param parent {IContainer}
        */ 
        apply(parent: IContainer): void;
        /**
        * 删除覆盖。在 apply() 方法中记住的值将被恢复。
        * @method egret.gui.IOverride#remove
        * @param parent {IContainer}
        */ 
        remove(parent: IContainer): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.OverrideBase
    * @classdesc
    * OverrideBase 类是视图状态所用的 override 类的基类。
    * @extends egret.HashObject
    * @implements egret.gui.IOverride
    */ 
    class OverrideBase extends HashObject implements IOverride {
        /**
        * @method egret.gui.OverrideBase#constructor
        */
        constructor();
        /**
        * @method egret.gui.OverrideBase#initialize
        * @param parent {IStateClient}
        */
        public initialize(parent: IStateClient): void;
        /**
        * @method egret.gui.OverrideBase#apply
        * @param parent {IContainer}
        */
        public apply(parent: IContainer): void;
        /**
        * @method egret.gui.OverrideBase#remove
        * @param parent {IContainer}
        */
        public remove(parent: IContainer): void;
        /**
        * 从对象初始化，这是一个便利方法
        * @method egret.gui.OverrideBase#initializeFromObject
        * @param properties {any}
        * @returns {any}
        */ 
        public initializeFromObject(properties: any): any;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.AddItems
    * @classdesc
    * 添加显示元素
    * @extends egret.gui.OverrideBase
    */ 
    class AddItems extends OverrideBase {
        /**
        * 添加父级容器的底层
        * @constant egret.gui.AddItems.FIRST
        */ 
        static FIRST: string;
        /**
        * 添加在父级容器的顶层
        * @constant egret.gui.AddItems.LAST
        */ 
        static LAST: string;
        /**
        * 添加在相对对象之前
        * @constant egret.gui.AddItems.BEFORE
        */ 
        static BEFORE: string;
        /**
        * 添加在相对对象之后
        * @constant egret.gui.AddItems.AFTER
        */ 
        static AFTER: string;
        /**
        * 构造函数
        * @method egret.gui.AddItems#constructor
        */ 
        constructor(target: string, propertyName: string, position: string, relativeTo: string);
        /**
        * 要添加到的属性
        * @member egret.gui.AddItems#propertyName
        */ 
        public propertyName: string;
        /**
        * 添加的位置
        * @member egret.gui.AddItems#position
        */ 
        public position: string;
        /**
        * 相对的显示元素的实例名
        * @member egret.gui.AddItems#relativeTo
        */ 
        public relativeTo: string;
        /**
        * 目标实例名
        * @member egret.gui.AddItems#target
        */ 
        public target: string;
        /**
        * @method egret.gui.AddItems#initialize
        * @param parent {IStateClient}
        */
        public initialize(parent: IStateClient): void;
        /**
        * @method egret.gui.AddItems#apply
        * @param parent {IContainer}
        */
        public apply(parent: IContainer): void;
        /**
        * @method egret.gui.AddItems#remove
        * @param parent {IContainer}
        */
        public remove(parent: IContainer): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.SetProperty
    * @classdesc
    * 设置属性
    * @extends egret.gui.OverrideBase
    */ 
    class SetProperty extends OverrideBase {
        /**
        * 构造函数
        * @method egret.gui.SetProperty#constructor
        */ 
        constructor(target: string, name: string, value: any);
        /**
        * 要修改的属性名
        * @member egret.gui.SetProperty#name
        */ 
        public name: string;
        /**
        * 目标实例名
        * @member egret.gui.SetProperty#target
        */ 
        public target: string;
        /**
        * 属性值
        * @member egret.gui.SetProperty#value
        */ 
        public value: any;
        /**
        * 旧的属性值
        */ 
        private oldValue;
        /**
        * @method egret.gui.SetProperty#apply
        * @param parent {IContainer}
        */
        public apply(parent: IContainer): void;
        /**
        * @method egret.gui.SetProperty#remove
        * @param parent {IContainer}
        */
        public remove(parent: IContainer): void;
        /**
        * 设置属性值
        */ 
        private setPropertyValue(obj, name, value, valueForType);
        /**
        * 转成Boolean值
        */ 
        private toBoolean(value);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.State
    * @classdesc
    * State 类定义视图状态，即组件的特定视图。
    * @extends egret.HashObject
    */
    class State extends HashObject {
        /**
        * @method egret.gui.State#constructor
        * @param properties {any}
        */
        constructor(name: string, overrides: IOverride[]);
        /**
        * 已经初始化标志
        */ 
        private initialized;
        /**
        * 视图状态的名称。给定组件的状态名称必须唯一。必须设置此属性。
        * @member egret.gui.State#name
        */ 
        public name: string;
        /**
        * 该视图状态的覆盖，表现为实现 IOverride 接口的对象的数组。
        * 这些覆盖在进入状态时按顺序应用，在退出状态时按相反的顺序删除。
        * @member egret.gui.State#overrides
        */ 
        public overrides: IOverride[];
        /**
        * 此视图状态作为 String 数组所属的状态组。
        * @member egret.gui.State#stateGroups
        */ 
        public stateGroups: any[];
        /**
        * 初始化视图
        * @method egret.gui.State#initialize
        * @param parent {IStateClient}
        */ 
        public initialize(parent: IStateClient): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.LayoutUtil
    * @classdesc
    * 布局工具类
    */
    class LayoutUtil {
        /**
        * 根据对象当前的xy坐标调整其相对位置属性，使其在下一次的父级布局中过程中保持当前位置不变。
        * @method egret.gui.LayoutUtil.adjustRelativeByXY
        * @param element {IVisualElement} 要调整相对位置属性的对象
        * @param parent {DisplayObjectContainer} element的父级容器。若不设置，则取element.parent的值。若两者的值都为空，则放弃调整。
        */ 
        static adjustRelativeByXY(element: IVisualElement, parent?: DisplayObjectContainer): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * 返回字符串所对应的全局唯一Rectangle对象。此方法主要为了减少scale9Grid属性的实例个数。
    * 参数的相同的九宫格数据使用此方法可以全局共享同一个Rectangle对象。
    * @param value {string} 以字符串形式表示Rectangle构造函数的四个参数:x，y，width，height。例如："7,7,46,46"。
    * @returns {string} 字符串对应的Rectangle实例。
    */
    function getScale9Grid(value: string): Rectangle;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IItemRenderer
    * @interface
    * @classdesc
    * 列表类组件的项呈示器接口
    * @extends egret.gui.ILayoutElement
    */
    interface IItemRenderer extends ILayoutElement {
        /**
        * 要呈示或编辑的数据。
        * @member egret.gui.IItemRenderer#data
        */ 
        data: any;
        /**
        * 如果项呈示器可以将其自身显示为已选中，则包含 true。
        * @member egret.gui.IItemRenderer#selected
        */ 
        selected: boolean;
        /**
        * 项呈示器的主机组件的数据提供程序中的项目索引。
        * @member egret.gui.IItemRenderer#itemIndex
        */ 
        itemIndex: number;
        /**
        * 要在项呈示器中显示的 String。
        * @member egret.gui.IItemRenderer#label
        */ 
        label: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IItemRendererOwner
    * @interface
    * @classdesc
    * 项呈示器的主机组件接口
    */ 
    interface IItemRendererOwner {
        /**
        * 更新项呈示器数据
        * @method egret.gui.IItemRendererOwner#updateRenderer
        * @param renderer {IItemRenderer}
        * @param itemIndex {number}
        * @param data {any}
        * @returns {IItemRenderer}
        */ 
        updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ITreeItemRenderer
    * @interface
    * @classdesc
    * 树状列表组件的项呈示器接口
    * @extends egret.gui.IItemRenderer
    */
    interface ITreeItemRenderer extends IItemRenderer {
        /**
        * 图标的皮肤名
        * @member egret.gui.ITreeItemRenderer#iconSkinName
        */
        iconSkinName: any;
        /**
        * 缩进深度。0表示顶级节点，1表示第一层子节点，以此类推。
        * @member egret.gui.ITreeItemRenderer#depth
        */
        depth: number;
        /**
        * 是否含有子节点。
        * @member egret.gui.ITreeItemRenderer#hasChildren
        */
        hasChildren: boolean;
        /**
        * 节点是否处于开启状态。
        * @member egret.gui.ITreeItemRenderer#opened
        */
        opened: boolean;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.UIAsset
    * @classdesc
    * 素材包装器。<p/>
    * 注意：UIAsset仅在添content时测量一次初始尺寸， 请不要在外部直接修改content尺寸，
    * 若做了引起content尺寸发生变化的操作, 需手动调用UIAsset的invalidateSize()进行重新测量。
    * @extends egret.gui.UIComponent
    * @implements egret.gui.ISkinnableClient
    */
    class UIAsset extends UIComponent {
        /**
        * @method egret.gui.UIAsset#constructor
        * @param source {any} 素材标识符
        */
        constructor(source?: any, autoScale?: boolean);
        /**
        * 矩形区域，它定义素材对象的九个缩放区域。
        * 注意:此属性仅在source的解析结果为Texture并且fileMode为BitmapFillMode.SCALE时有效。
        * @member {egret.Texture} egret.gui.UIAsset#scale9Grid
        */
        public scale9Grid: Rectangle;
        /**
        * 确定位图填充尺寸的方式。默认值：BitmapFillMode.SCALE。
        * 设置为 BitmapFillMode.REPEAT时，位图将重复以填充区域。
        * 设置为 BitmapFillMode.SCALE时，位图将拉伸以填充区域。
        * 注意:此属性仅在source的解析结果为Texture时有效
        * @member {egret.Texture} egret.gui.UIAsset#fillMode
        */
        public fillMode: string;
        private sourceChanged;
        public _source: any;
        /**
        * 素材标识符。可以为Class,String,或DisplayObject实例等任意类型，具体规则由项目注入的素材适配器决定，
        * 适配器根据此属性值解析获取对应的显示对象，并赋值给content属性。
        * @member egret.gui.UIAsset#source
        */ 
        public source : any;
        public _content: any;
        /**
        * 解析source得到的对象，通常为显示对象或Texture。
        * @member egret.gui.UIAsset#content
        */
        public content : any;
        private createChildrenCalled;
        /**
        * @method egret.gui.UIAsset#createChildren
        */
        public createChildren(): void;
        /**
        * 皮肤解析适配器
        */ 
        private static assetAdapter;
        private contentReused;
        /**
        * 解析source
        */ 
        private parseSource();
        /**
        * 获取资源适配器
        */
        private getAdapter();
        /**
        * 皮肤发生改变
        */
        private contentChanged(content, source);
        public measure(): void;
        /**
        * 是自动否缩放content对象，以符合UIAsset的尺寸。默认值true。
        */
        public autoScale: Boolean;
        /**
        * @method egret.gui.UIAsset#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        public _render(renderContext: RendererContext): void;
        /**
        * @see egret.DisplayObject.measureBounds
        * @returns {Rectangle}
        * @private
        */
        public _measureBounds(): Rectangle;
        private static errorStr;
        /**
        * @method egret.gui.UIAsset#addChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */ 
        public addChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.UIAsset#addChildAt
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        * @returns {DisplayObject}
        */ 
        public addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
        * @method egret.gui.UIAsset#removeChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */ 
        public removeChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.UIAsset#removeChildAt
        * @deprecated
        * @param index {number}
        * @returns {DisplayObject}
        */ 
        public removeChildAt(index: number): DisplayObject;
        /**
        * @method egret.gui.UIAsset#setChildIndex
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        */ 
        public setChildIndex(child: DisplayObject, index: number): void;
        /**
        * @method egret.gui.UIAsset#swapChildren
        * @deprecated
        * @param child1 {DisplayObject}
        * @param child2 {DisplayObject}
        */ 
        public swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
        * @method egret.gui.UIAsset#swapChildrenAt
        * @deprecated
        * @param index1 {number}
        * @param index2 {number}
        */ 
        public swapChildrenAt(index1: number, index2: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.SkinnableComponent
    * @classdesc
    * 复杂可设置外观组件的基类，接受ISkin类或任何显示对象作为皮肤。
    * 当皮肤为ISkin时，将自动匹配两个实例内同名的公开属性(显示对象)，
    * 并将皮肤的属性引用赋值到此类定义的同名属性(必须没有默认值)上,
    * 如果要对公共属性添加事件监听或其他操作，
    * 请覆盖partAdded()和partRemoved()方法
    * @extends egret.gui.SkinnableComponent
    */
    class SkinnableComponent extends UIComponent implements ISkinnableClient {
        /**
        * 构造函数
        * @method egret.gui.SkinnableComponent#constructor
        */ 
        constructor();
        /**
        * 主机组件标识符。用于唯一确定一个组件的名称。
        * 在解析skinName时，会把此属性的值传递给ISkinAdapter.getSkin()方法，以参与皮肤解析的规则判断。
        * 用户自定义的组件若不对此属性赋值，将会继承父级的标识符定义。
        * @member {string} egret.gui.SkinnableComponent#hostComponentKey
        */
        public hostComponentKey: string;
        /**
        * 外部显式设置了皮肤名
        */
        public _skinNameExplicitlySet: any;
        public _skinName: any;
        /**
        * 皮肤标识符。可以为Class,String,或DisplayObject实例等任意类型，具体规则由项目注入的素材适配器决定，
        * 适配器根据此属性值解析获取对应的显示对象，并赋值给skin属性。
        * @member egret.gui.SkinnableComponent#skinName
        */
        public skinName : any;
        public _skin: any;
        /**
        * 皮肤对象实例。
        * @member egret.gui.SkinnableComponent#skin
        */
        public skin : any;
        private createChildrenCalled;
        /**
        * @method egret.gui.SkinnableComponent#createChildren
        */
        public createChildren(): void;
        /**
        * 皮肤解析适配器
        */
        private static skinAdapter;
        /**
        * 解析skinName
        */
        private parseSkinName();
        /**
        * 获取皮肤适配器
        */
        private getSkinAdapter();
        /**
        * 附加皮肤
        * @method egret.gui.SkinnableComponent#attachSkin
        * @param skin {any}
        */ 
        public attachSkin(skin: any): void;
        /**
        * 匹配皮肤和主机组件的公共变量，并完成实例的注入。此方法在附加皮肤时会自动执行一次。
        * 若皮肤中含有延迟实例化的子部件，在子部件实例化完成时需要从外部再次调用此方法,完成注入。
        * @method egret.gui.SkinnableComponent#findSkinParts
        */ 
        public findSkinParts(): void;
        /**
        * 卸载皮肤
        * @method egret.gui.SkinnableComponent#detachSkin
        * @param skin {any}
        */ 
        public detachSkin(skin: any): void;
        /**
        * 若皮肤是ISkin,则调用此方法附加皮肤中的公共部件
        * @method egret.gui.SkinnableComponent#partAdded
        * @param partName {string}
        * @param instance {any}
        */ 
        public partAdded(partName: string, instance: any): void;
        /**
        * 若皮肤是ISkin，则调用此方法卸载皮肤之前注入的公共部件
        * @method egret.gui.SkinnableComponent#partRemoved
        * @param partName {string}
        * @param instance {any}
        */ 
        public partRemoved(partName: string, instance: any): void;
        private stateIsDirty;
        /**
        * 标记当前需要重新验证皮肤状态
        * @method egret.gui.SkinnableComponent#invalidateSkinState
        */ 
        public invalidateSkinState(): void;
        /**
        * 子类覆盖此方法,应用当前的皮肤状态
        * @method egret.gui.SkinnableComponent#validateSkinState
        */ 
        public validateSkinState(): void;
        private _autoMouseEnabled;
        /**
        * 在enabled属性发生改变时是否自动开启或禁用鼠标事件的响应。默认值为true。
        * @member egret.gui.SkinnableComponent#autoTouchEnabled
        */
        public autoTouchEnabled : boolean;
        /**
        * 外部显式设置的mouseChildren属性值
        */ 
        private explicitMouseChildren;
        /**
        * @member egret.gui.SkinnableComponent#touchChildren
        */
        /**
        * @inheritDoc
        */ 
        public touchChildren : boolean;
        /**
        * 外部显式设置的mouseEnabled属性值
        */ 
        private explicitMouseEnabled;
        /**
        * @member egret.gui.SkinnableComponent#touchEnabled
        */
        /**
        * @inheritDoc
        */ 
        public touchEnabled : boolean;
        /**
        * @member egret.gui.SkinnableComponent#enabled
        */
        /**
        * @inheritDoc
        */
        public enabled : boolean;
        public _setEnabled(value: boolean): void;
        /**
        * 返回组件当前的皮肤状态名称,子类覆盖此方法定义各种状态名
        * @method egret.gui.SkinnableComponent#getCurrentSkinState
        * @returns {string}
        */ 
        public getCurrentSkinState(): string;
        /**
        * @method egret.gui.SkinnableComponent#commitProperties
        */
        public commitProperties(): void;
        private skinLayout;
        /**
        * 启用或禁用组件自身的布局。通常用在当组件的皮肤不是ISkinPartHost，又需要自己创建子项并布局时。
        */ 
        public _setSkinLayoutEnabled(value: boolean): void;
        public _childXYChanged(): void;
        public measure(): void;
        /**
        * @method egret.gui.SkinnableComponent#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        private static errorStr;
        /**
        * @method egret.gui.SkinnableComponent#addChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */
        public addChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.SkinnableComponent#addChildAt
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        * @returns {DisplayObject}
        */
        public addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
        * @method egret.gui.SkinnableComponent#removeChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */
        public removeChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.SkinnableComponent#removeChildAt
        * @deprecated
        * @param index {number}
        * @returns {DisplayObject}
        */
        public removeChildAt(index: number): DisplayObject;
        /**
        * @method egret.gui.SkinnableComponent#setChildIndex
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        */
        public setChildIndex(child: DisplayObject, index: number): void;
        /**
        * @method egret.gui.SkinnableComponent#swapChildren
        * @deprecated
        * @param child1 {DisplayObject}
        * @param child2 {DisplayObject}
        */
        public swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
        * @method egret.gui.SkinnableComponent#swapChildrenAt
        * @deprecated
        * @param index1 {number}
        * @param index2 {number}
        */
        public swapChildrenAt(index1: number, index2: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.DefaultSkinAdapter
    * @classdesc
    * 默认的ISkinAdapter接口实现
    * @implements egret.gui.ISkinAdapter
    */
    class DefaultSkinAdapter implements ISkinAdapter {
        /**
        * 构造函数
        * @method egret.gui.DefaultSkinAdapter#constructor
        */
        constructor();
        /**
        * 获取皮肤显示对象
        * @method egret.gui.ISkinAdapter#getSkin
        * @param skinName {any} 待解析的皮肤标识符
        * @param hostComponentKey {string} 主机组件标识符
        * @returns {any} 皮肤对象实例
        */
        public getSkin(skinName: any, hostComponentKey: string): any;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.DefaultAssetAdapter
    * @classdesc
    * 默认的IAssetAdapter接口实现
    * @implements egret.gui.IAssetAdapter
    */
    class DefaultAssetAdapter implements IAssetAdapter {
        /**
        * 构造函数
        * @method egret.gui.DefaultSkinAdapter#constructor
        */
        constructor();
        /**
        * 解析素材
        * @method egret.gui.DefaultAssetAdapter#getAsset
        * @param source {any} 待解析的新素材标识符
        * @param compFunc {Function} 解析完成回调函数，示例：compFunc(content:any,source:any):void;
        * 回调参数content接受两种类型：DisplayObject或Texture。
        * @param thisObject {any} compFunc的this引用
        * @param oldContent any 旧的内容对象,传入值有可能为null。
        * 对于某些类型素材，例如MovieClip，可以重用传入的显示对象,只修改其数据再返回。
        */
        public getAsset(source: any, compFunc: Function, thisObject: any, oldContent: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.SkinBasicLayout
    * @classdesc
    * 皮肤简单布局类。
    * @extends egret.HashObject
    */
    class SkinBasicLayout extends HashObject {
        /**
        * @method egret.gui.SkinBasicLayout#constructor
        */
        constructor();
        private _target;
        /**
        * 目标布局对象
        * @member egret.gui.SkinBasicLayout#target
        */
        public target : SkinnableComponent;
        /**
        * 测量组件尺寸大小
        * @method egret.gui.SkinBasicLayout#measure
        */
        public measure(): void;
        /**
        * 更新显示列表
        * @method egret.gui.SkinBasicLayout#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ButtonBase
    * @classdesc
    * 按钮组件基类
    * @extends egret.gui.SkinnableComponent
    */
    class ButtonBase extends SkinnableComponent {
        /**
        * 构造函数
        * @method egret.gui.ButtonBase#constructor
        */
        constructor();
        /**
        * 已经开始过不断抛出buttonDown事件的标志
        */
        private _downEventFired;
        /**
        * 重发buttonDown事件计时器
        */
        private autoRepeatTimer;
        /**
        * [SkinPart]按钮上的文本标签
        * @member egret.gui.ButtonBase#labelDisplay
        */
        public labelDisplay: IDisplayText;
        private _autoRepeat;
        /**
        * 指定在用户按住鼠标按键时是否重复分派 buttonDown 事件。
        * @member egret.gui.ButtonBase#autoRepeat
        */
        public autoRepeat : boolean;
        private _repeatDelay;
        /**
        * 在第一个 buttonDown 事件之后，以及相隔每个 repeatInterval 重复一次 buttonDown 事件之前，需要等待的毫秒数。
        * @member egret.gui.ButtonBase#repeatDelay
        */
        public repeatDelay : number;
        private _repeatInterval;
        /**
        * 用户在按钮上按住鼠标时，buttonDown 事件之间相隔的毫秒数。
        * @member egret.gui.ButtonBase#repeatInterval
        */
        public repeatInterval : number;
        private _hovered;
        /**
        * 指示鼠标指针是否位于按钮上。
        * @member egret.gui.ButtonBase#hovered
        */
        public hovered : boolean;
        private _keepDown;
        /**
        * 强制让按钮停在鼠标按下状态,此方法不会导致重复抛出buttonDown事件,仅影响皮肤State。
        * @method egret.gui.ButtonBase#_keepDown
        * @param down {boolean} 是否按下
        */
        public _setKeepDown(down: boolean): void;
        private _label;
        /**
        * 要在按钮上显示的文本
        * @member egret.gui.ButtonBase#label
        */
        public label : string;
        public _getLabel(): string;
        public _setLabel(value: string): void;
        private _mouseCaptured;
        /**
        * 指示第一次分派 MouseEvent.MOUSE_DOWN 时，是否按下鼠标以及鼠标指针是否在按钮上。
        * @member egret.gui.ButtonBase#mouseCaptured
        */
        public mouseCaptured : boolean;
        private _stickyHighlighting;
        /**
        * 如果为 false，则按钮会在用户按下它时显示其鼠标按下时的外观，但在用户将鼠标拖离它时将改为显示鼠标经过的外观。
        * 如果为 true，则按钮会在用户按下它时显示其鼠标按下时的外观，并在用户将鼠标拖离时继续显示此外观。
        * @member egret.gui.ButtonBase#stickyHighlighting
        */
        public stickyHighlighting : boolean;
        /**
        * 开始抛出buttonDown事件
        */
        private checkButtonDownConditions();
        /**
        * 添加鼠标事件监听
        * @method egret.gui.ButtonBase#addHandlers
        */
        public addHandlers(): void;
        /**
        * 添加舞台鼠标弹起事件监听
        */
        private addStageMouseHandlers();
        /**
        * 移除舞台鼠标弹起事件监听
        */
        private removeStageMouseHandlers();
        /**
        * 按钮是否是按下的状态
        */
        private isDown();
        /**
        * 检查需要启用还是关闭重发计时器
        */
        private checkAutoRepeatTimerConditions(buttonDown);
        /**
        * 启动重发计时器
        */
        private startTimer();
        /**
        * 停止重发计时器
        */
        private stopTimer();
        /**
        * 鼠标事件处理
        * @method egret.gui.ButtonBase#mouseEventHandler
        * @param event {Event}
        */
        public mouseEventHandler(event: Event): void;
        /**
        * 按钮弹起事件
        * @method egret.gui.ButtonBase#buttonReleased
        */
        public buttonReleased(): void;
        /**
        * 按钮点击事件
        * @method egret.gui.ButtonBase#clickHandler
        * @param event {TouchEvent}
        */
        public clickHandler(event: TouchEvent): void;
        /**
        * 舞台上鼠标弹起事件
        */
        private stage_mouseUpHandler(event);
        /**
        * 自动重发计时器首次延迟结束事件
        */
        private autoRepeat_timerDelayHandler(event);
        /**
        * 自动重发buttonDown事件
        */
        private autoRepeat_timerHandler(event);
        /**
        * @method egret.gui.ButtonBase#getCurrentSkinState
        * @returns {string}
        */
        public getCurrentSkinState(): string;
        /**
        * @method egret.gui.ButtonBase#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ToggleButtonBase
    * @classdesc
    * 切换按钮组件基类
    * @extends egret.gui.ButtonBase
    */ 
    class ToggleButtonBase extends ButtonBase {
        /**
        * @method egret.gui.ToggleButtonBase#constructor
        */
        constructor();
        public _selected: boolean;
        /**
        * 按钮处于按下状态时为 true，而按钮处于弹起状态时为 false。
        * @member egret.gui.ToggleButtonBase#selected
        */ 
        public selected : boolean;
        public _setSelected(value: boolean): void;
        /**
        * @method egret.gui.ToggleButtonBase#getCurrentSkinState
        * @returns {string}
        */
        public getCurrentSkinState(): string;
        /**
        * 是否根据鼠标事件自动变换选中状态,默认true。仅框架内使用。
        */ 
        public _autoSelected: boolean;
        /**
        * @method egret.gui.ToggleButtonBase#buttonReleased
        */
        public buttonReleased(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TextBase
    * @classdesc
    * 文本基类,实现对文本的自动布局，样式属性设置。
    * @extends egret.gui.UIComponent
    * @implements egret.gui.IDisplayText
    */ 
    class TextBase extends UIComponent implements IDisplayText {
        /**
        * @method egret.gui.TextBase#constructor
        */
        constructor();
        /**
        * 默认的文本测量宽度
        * @constant egret.gui.TextBase.DEFAULT_MEASURED_WIDTH
        */ 
        static DEFAULT_MEASURED_WIDTH: number;
        /**
        * 默认的文本测量高度
        * @constant egret.gui.TextBase.DEFAULT_MEASURED_HEIGHT
        */ 
        static DEFAULT_MEASURED_HEIGHT: number;
        /**
        * 呈示此文本的内部 TextField
        */ 
        public _textField: TextField;
        private fontFamilyChanged;
        private _fontFamily;
        /**
        * 字体名称 。默认值：SimSun
        * @member egret.gui.TextBase#fontFamily
        */
        public fontFamily : string;
        private sizeChanged;
        private _size;
        /**
        * 字号大小,默认值30 。
        * @member egret.gui.TextBase#size
        */
        public size : number;
        private boldChanged;
        private _bold;
        /**
        * 是否显示为粗体，默认false。
        * @member egret.gui.TextBase#bold
        */
        public bold : boolean;
        private italicChanged;
        private _italic;
        /**
        * 是否显示为粗体，默认false。
        * @member egret.gui.TextBase#italic
        */
        public italic : boolean;
        private textAlignChanged;
        private _textAlign;
        /**
        * 文字的水平对齐方式 ,请使用HorizontalAlign中定义的常量。
        * 默认值：HorizontalAlign.LEFT。
        * @member egret.gui.TextBase#textAlign
        */
        public textAlign : string;
        private verticalAlignChanged;
        private _verticalAlign;
        /**
        * 文字的垂直对齐方式 ,请使用VerticalAlign中定义的常量。
        * 默认值：VerticalAlign.TOP。
        * @member egret.gui.TextBase#verticalAlign
        */
        public verticalAlign : string;
        private lineSpacingChanged;
        private _lineSpacing;
        /**
        * 行间距
        * @member egret.gui.TextBase#lineSpacing
        */
        public lineSpacing : number;
        private textColorChanged;
        private _textColor;
        /**
        * @member egret.gui.TextBase#textColor
        */
        public textColor : number;
        /**
        * @member egret.gui.TextBase#_textChanged
        */
        public _textChanged: boolean;
        public _text: string;
        /**
        * @member egret.gui.TextBase#text
        */
        public text : string;
        /**
        * @method egret.gui.TextBase#createChildren
        */
        public createChildren(): void;
        /**
        * @method egret.gui.TextBase#commitProperties
        */
        public commitProperties(): void;
        /**
        * 检查是否创建了textField对象，没有就创建一个。
        */ 
        private checkTextField();
        private createTextField();
        /**
        * @method egret.gui.TextBase#measure
        */
        public measure(): void;
        /**
        * 更新显示列表
        * @method egret.gui.TextBase#$updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */ 
        public $updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
        * @method egret.gui.TextBase#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.GroupBase
    * @classdesc
    * 自动布局容器基类
    * @extends egret.gui.UIComponent
    * @implements egret.gui.IViewport
    */
    class GroupBase extends UIComponent implements IViewport {
        /**
        * @method egret.gui.GroupBase#constructor
        */
        constructor();
        /**
        * @method egret.gui.GroupBase#createChildren
        */
        public createChildren(): void;
        private _contentWidth;
        /**
        * @member egret.gui.GroupBase#contentWidth
        */
        public contentWidth : number;
        private setContentWidth(value);
        private _contentHeight;
        /**
        * @member egret.gui.GroupBase#contentHeight
        */
        public contentHeight : number;
        private setContentHeight(value);
        /**
        * 设置 contentWidth 和 contentHeight 属性，此方法由Layout类调用
        * @method egret.gui.GroupBase#setContentSize
        * @private
        *
        * @param width {number}
        * @param height {number}
        */
        public setContentSize(width: number, height: number): void;
        public _layout: LayoutBase;
        /**
        * 此容器的布局对象
        * @member egret.gui.GroupBase#layout
        */
        public layout : LayoutBase;
        public _setLayout(value: LayoutBase): void;
        private _clipAndEnableScrolling;
        /**
        * 如果为 true，指定将子代剪切到视区的边界。如果为 false，则容器子代会从容器边界扩展过去，而不管组件的大小规范。默认false
        * @member egret.gui.GroupBase#clipAndEnableScrolling
        */
        public clipAndEnableScrolling : boolean;
        private _horizontalScrollPosition;
        /**
        * 可视区域水平方向起始点
        * @member egret.gui.GroupBase#horizontalScrollPosition
        */
        public horizontalScrollPosition : number;
        private _verticalScrollPosition;
        /**
        * 可视区域竖直方向起始点
        * @member egret.gui.GroupBase#verticalScrollPosition
        */
        public verticalScrollPosition : number;
        /**
        * 滚动条位置改变
        */
        private scrollPositionChanged();
        /**
        * 更新可视区域
        * @param w {number}
        * @param h {number}
        */
        private updateScrollRect(w, h);
        /**
        * @method egret.gui.GroupBase#measure
        */
        public measure(): void;
        /**
        * 在更新显示列表时是否需要更新布局标志
        * @member egret.gui.GroupBase#_layoutInvalidateDisplayListFlag
        */
        public _layoutInvalidateDisplayListFlag: boolean;
        /**
        * 标记需要更新显示列表但不需要更新布局
        * @method egret.gui.GroupBase#_invalidateDisplayListExceptLayout
        */
        public _invalidateDisplayListExceptLayout(): void;
        /**
        * @method egret.gui.GroupBase#invalidateDisplayList
        */
        public invalidateDisplayList(): void;
        /**
        * @method egret.gui.GroupBase#_childXYChanged
        */
        public _childXYChanged(): void;
        /**
        * 在测量尺寸时是否需要测量布局的标志
        * @member egret.gui.GroupBase#_layoutInvalidateSizeFlag
        */
        public _layoutInvalidateSizeFlag: boolean;
        /**
        * 标记需要更新显示列表但不需要更新布局
        * @method egret.gui.GroupBase#_invalidateSizeExceptLayout
        */
        public _invalidateSizeExceptLayout(): void;
        /**
        * @method egret.gui.GroupBase#invalidateSize
        */
        public invalidateSize(): void;
        /**
        * @method egret.gui.GroupBase#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
        * 此容器中的可视元素的数量。
        * @member egret.gui.GroupBase#numElements
        */
        public numElements : number;
        /**
        * 返回指定索引处的可视元素。
        * @method egret.gui.GroupBase#getElementAt
        * @param index {number} 要检索的元素的索引。
        * @throws RangeError 如果在子列表中不存在该索引位置。
        * @returns {IVisualElement}
        */
        public getElementAt(index: number): IVisualElement;
        /**
        * 返回可视元素的索引位置。若不存在，则返回-1。
        * @method egret.gui.GroupBase#getElementIndex
        * @param element {IVisualElement} 可视元素。
        * @returns {number}
        */
        public getElementIndex(element: IVisualElement): number;
        /**
        * 返回在容器可视区域内的布局元素索引列表,此方法忽略不是布局元素的普通的显示对象
        * @method egret.gui.GroupBase#getElementIndicesInView
        * @returns {number}
        */
        public getElementIndicesInView(): number[];
        /**
        * 在支持虚拟布局的容器中，设置容器内可见的子元素索引范围。此方法在不支持虚拟布局的容器中无效。
        * 通常在即将连续调用getVirtualElementAt()之前需要显式设置一次，以便容器提前释放已经不可见的子元素。
        * @method egret.gui.GroupBase#setVirtualElementIndicesInView
        * @param startIndex {number} 可视元素起始索引
        * @param endIndex {number} 可视元素结束索引
        */
        public setVirtualElementIndicesInView(startIndex: number, endIndex: number): void;
        /**
        * 支持useVirtualLayout属性的布局类在updateDisplayList()中使用此方法来获取“处于视图中”的布局元素
        * @method egret.gui.GroupBase#getVirtualElementAt
        * @param index {number} 要检索的元素的索引。
        * @returns {IVisualElement}
        */
        public getVirtualElementAt(index: number): IVisualElement;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ItemRenderer
    * @classdesc
    * 项呈示器基类
    * @extends egret.gui.ButtonBase
    * @implements egret.gui.IItemRenderer
    */
    class ItemRenderer extends ButtonBase implements IItemRenderer {
        /**
        * @method egret.gui.ItemRenderer#constructor
        */
        constructor();
        private dataChangedFlag;
        private _data;
        /**
        * @member egret.gui.ItemRenderer#data
        */
        public data : any;
        /**
        * 子类复写此方法以在data数据源发生改变时跟新显示列表。
        * 与直接复写_data的setter方法不同，它会确保在皮肤已经附加完成后再被调用。
        * @method egret.gui.ItemRenderer#dataChanged
        */ 
        public dataChanged(): void;
        private _selected;
        /**
        * @member egret.gui.ItemRenderer#selected
        */
        public selected : boolean;
        private _itemIndex;
        /**
        * @member egret.gui.ItemRenderer#itemIndex
        */
        public itemIndex : number;
        /**
        * @method egret.gui.ItemRenderer#commitProperties
        */
        public commitProperties(): void;
        /**
        * @method egret.gui.ItemRenderer#getCurrentSkinState
        * @returns {string}
        */
        public getCurrentSkinState(): string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TreeItemRenderer
    * @classdesc
    * Tree组件的项呈示器基类
    * @extends egret.gui.ItemRenderer
    * @implements egret.gui.ITreeItemRenderer
    */
    class TreeItemRenderer extends ItemRenderer implements ITreeItemRenderer {
        /**
        * 构造函数
        * @method egret.gui.TreeItemRenderer#constructor
        */ 
        constructor();
        private onItemMouseDown(event);
        /**
        * [SkinPart]图标显示对象
        * @member egret.gui.TreeItemRenderer#iconDisplay
        */
        public iconDisplay: UIAsset;
        /**
        * [SkinPart]子节点开启按钮
        * @member egret.gui.TreeItemRenderer#disclosureButton
        */
        public disclosureButton: ToggleButtonBase;
        /**
        * [SkinPart]用于调整缩进值的容器对象。
        * @member egret.gui.TreeItemRenderer#contentGroup
        */
        public contentGroup: DisplayObject;
        private _indentation;
        /**
        * 子节点相对父节点的缩进值，以像素为单位。默认17。
        * @member egret.gui.TreeItemRenderer#indentation
        */
        public indentation : number;
        private _iconSkinName;
        /**
        * @member egret.gui.TreeItemRenderer#iconSkinName
        */
        public iconSkinName : any;
        private _depth;
        /**
        * @member egret.gui.TreeItemRenderer#depth
        */
        public depth : number;
        private _hasChildren;
        /**
        * @member egret.gui.TreeItemRenderer#hasChildren
        */
        public hasChildren : boolean;
        private _isOpen;
        /**
        * @member egret.gui.TreeItemRenderer#opened
        */
        public opened : boolean;
        /**
        * @method egret.gui.TreeItemRenderer#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.TreeItemRenderer#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
        /**
        * 鼠标在disclosureButton上按下
        * @method egret.gui.TreeItemRenderer#disclosureButton_mouseDownHandler
        * @param event {TouchEvent}
        */ 
        public disclosureButton_mouseDownHandler(event: TouchEvent): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Animation
    * @classdesc
    * 数值缓动工具类
    */
    class Animation {
        /**
        * 构造函数
        * @method egret.gui.Animation#constructor
        * @param updateFunction {Function} 动画更新时的回调函数,updateFunction(animation:Animation):void
        * @param thisObject {an}
        */
        constructor(updateFunction: Function, thisObject: any);
        /**
        * 此动画的缓动行为。设置为null意味着不使用缓动，默认值为Ease.sineInOut()
        * @member egret.gui.Animation#easerFunction
        */
        public easerFunction: Function;
        private thisObject;
        private _isPlaying;
        /**
        * 是否正在播放动画，不包括延迟等待和暂停的阶段
        * @member egret.gui.Animation#isPlaying
        */
        public isPlaying : boolean;
        private _duration;
        /**
        * 动画持续时间,单位毫秒，默认值500
        * @member egret.gui.Animation#duration
        */
        public duration : number;
        private _startDelay;
        /**
        * 动画开始播放前的延时时间,单位毫秒,默认0。
        * @member egret.gui.Animation#startDelay
        */
        public startDelay : number;
        private _repeatCount;
        /**
        * 动画重复的次数，0代表无限制重复。默认值为1。
        * @member egret.gui.Animation#repeatCount
        */
        public repeatCount : number;
        private _repeatDelay;
        /**
        * 每次重复播放之间的间隔。第二次及以后的播放开始之前的延迟毫秒数。若要设置第一次之前的延迟时间，请使用startDelay属性。
        * @member egret.gui.Animation#repeatDelay
        */
        public repeatDelay : number;
        /**
        * 随着时间的推移Animation将设置动画的属性和值的列表。对象示例:{p:"x",f:10,t:100}表示，属性名"x"从10改变到100。
        * @member egret.gui.Animation#motionPaths
        */
        public motionPaths: any[];
        private _currentValue;
        /**
        * 动画到当前时间对应的值。以MotionPath.property为键存储各个MotionPath的当前值。
        * @member egret.gui.Animation#currentValue
        */
        public currentValue : any;
        /**
        * 动画开始播放时的回调函数,只会在首次延迟等待结束时触发一次,若有重复播放，之后将触发repeatFunction。startFunction(animation:Animation):void
        * @member egret.gui.Animation#startFunction
        */
        public startFunction: Function;
        /**
        * 动画播放结束时的回调函数,可以是正常播放结束，也可以是被调用了end()方法导致结束。注意：stop()方法被调用不会触发这个函数。endFunction(animation:Animation):void
        * @member egret.gui.Animation#endFunction
        */
        public endFunction: Function;
        /**
        * 动画更新时的回调函数,updateFunction(animation:Animation):void
        * @member egret.gui.Animation#updateFunction
        */
        public updateFunction: Function;
        /**
        * 动画被停止的回调函数，即stop()方法被调用。stopFunction(animation:Animation):void
        * @member egret.gui.Animation#stopFunction
        */
        public stopFunction: Function;
        /**
        * 开始正向播放动画,无论何时调用都重新从零时刻开始，若设置了延迟会首先进行等待。
        * @method egret.gui.Animation#play
        */
        public play(): void;
        /**
        * 立即跳到指定百分比的动画位置
        */
        private seek(runningTime);
        /**
        * 开始播放动画
        */
        private start();
        /**
        * 直接跳到动画结尾
        * @method egret.gui.Animation#end
        */
        public end(): void;
        /**
        * 停止播放动画
        * @method egret.gui.Animation#stop
        */
        public stop(): void;
        /**
        * 仅停止播放动画，而不调用stopFunction。
        */
        private stopAnimation();
        private pauseTime;
        private _isPaused;
        /**
        * 正在暂停中
        * @member egret.gui.Animation#isPaused
        */
        public isPaused : boolean;
        /**
        * 暂停播放
        * @method egret.gui.Animation#pause
        */
        public pause(): void;
        /**
        * 继续播放
        * @method egret.gui.Animation#resume
        */
        public resume(): void;
        /**
        * 动画启动时刻
        */
        private startTime;
        private _started;
        /**
        * 动画已经开始的标志，包括延迟等待和暂停的阶段。
        * @member egret.gui.Animation#started
        */
        public started : boolean;
        /**
        * 已经播放的次数。
        */
        private playedTimes;
        /**
        * 计算当前值并返回动画是否结束
        */
        private doInterval();
        /**
        * 计算当前值
        */
        private caculateCurrentValue(fraction);
        /**
        * 总时间轴的当前时间
        */
        private static currentTime;
        private static TIMER_RESOLUTION;
        private static registered;
        /**
        * 正在活动的动画
        */
        private static activeAnimations;
        /**
        * 添加动画到队列
        */
        private static addAnimation(animation);
        /**
        * 从队列移除动画,返回移除前的索引
        */
        private static removeAnimation(animation);
        /**
        * 当前正在执行动画的索引
        */
        private static currentIntervalIndex;
        /**
        * 计时器触发函数
        */
        private static onEnterFrame(frameTime, currentTime);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Range
    * @classdesc
    * 范围选取组件,该组件包含一个值和这个值所允许的最大最小约束范围。
    * @extends egret.gui.SkinnableComponent
    */ 
    class Range extends SkinnableComponent {
        /**
        * 构造函数
        * @method egret.gui.Range#constructor
        */
        constructor();
        public _maximum: number;
        /**
        * 最大有效值改变标志
        */
        private maxChanged;
        /**
        * 最大有效值
        * @member egret.gui.Range#maximum
        */
        public maximum : number;
        public _setMaximun(value: number): void;
        public _minimum: number;
        /**
        * 最小有效值改变标志
        */
        private minChanged;
        /**
        * 最小有效值
        * @member egret.gui.Range#minimum
        */
        public minimum : number;
        public _setMinimun(value: number): void;
        private _stepSize;
        /**
        * 单步大小改变的标志
        */
        private stepSizeChanged;
        /**
        * 调用 changeValueByStep() 方法时 value 属性更改的单步大小。默认值为 1。<br/>
        * 除非 snapInterval 为 0，否则它必须是 snapInterval 的倍数。<br/>
        * 如果 stepSize 不是倍数，则会将它近似到大于或等于 snapInterval 的最近的倍数。<br/>
        * @member egret.gui.Range#stepSize
        */
        public stepSize : number;
        private _value;
        private _changedValue;
        /**
        * 此范围的当前值改变标志
        */
        private valueChanged;
        /**
        * 此范围的当前值。
        * @member egret.gui.Range#value
        */
        public value : number;
        public _setValue(newValue: number): void;
        public _getValue(): number;
        private _snapInterval;
        private snapIntervalChanged;
        private _explicitSnapInterval;
        /**
        * snapInterval 属性定义 value 属性的有效值。如果为非零，则有效值为 minimum 与此属性的整数倍数之和，且小于或等于 maximum。 <br/>
        * 例如，如果 minimum 为 10，maximum 为 20，而此属性为 3，则可能的有效值为 10、13、16、19 和 20。<br/>
        * 如果此属性的值为零，则仅会将有效值约束到介于 minimum 和 maximum 之间（包括两者）。<br/>
        * 此属性还约束 stepSize 属性（如果设置）的有效值。如果未显式设置此属性，但设置了 stepSize，则 snapInterval 将默认为 stepSize。<br/>
        * @member egret.gui.Range#snapInterval
        */
        public snapInterval : number;
        /**
        * @method egret.gui.Range#commitProperties
        */
        public commitProperties(): void;
        /**
        * 修正stepSize到最接近snapInterval的整数倍
        */
        private nearestValidSize(size);
        /**
        * 修正输入的值为有效值
        * @method egret.gui.Range#nearestValidValue
        * @param value {number} 输入值。
        * @param interval {number} snapInterval 的值，或 snapInterval 的整数倍数。
        * @returns {number}
        */
        public nearestValidValue(value: number, interval: number): number;
        /**
        * 设置当前值。此方法假定调用者已经使用了 nearestValidValue() 方法来约束 value 参数
        * @method egret.gui.Range#setValue
        * @param value {number} value属性的新值
        */
        public setValue(value: number): void;
        /**
        * 按 stepSize增大或减小当前值
        * @method egret.gui.Range#changeValueByStep
        * @param increase {boolean} 若为 true，则向value增加stepSize，否则减去它。
        */
        public changeValueByStep(increase?: boolean): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TrackBase
    * @classdesc
    * TrackBase类是具有一个轨道和一个或多个滑块按钮的组件的一个基类，如 Slider 和 ScrollBar。
    * @extends egret.gui.Range
    */ 
    class TrackBase extends Range {
        /**
        * @method egret.gui.TrackBase#constructor
        */
        constructor();
        private _slideDuration;
        /**
        * 在轨道上单击以移动滑块时，滑动动画持续的时间（以毫秒为单位）。<br/>
        * 此属性用于 Slider 和 ScrollBar。对于 Slider，在轨道上的任何单击将导致生成使用此样式的一个动画，同时滑块将移到单击的位置。<br/>
        * 对于 ScrollBar，仅当按住 Shift 键并单击轨道时才使用此样式，这会导致滑块移到单击的位置。<br/>
        * 未按下 Shift 键时单击 ScrollBar 轨道将导致出现分页行为。<br/>
        * 按住 Shift 键并单击时，必须也对 ScrollBar 设置 smoothScrolling 属性才可以实现动画行为。<br/>
        * 此持续时间是整个滑过轨道的总时间，实际滚动会根据距离相应缩短。
        * @member egret.gui.TrackBase#slideDuration
        */ 
        public slideDuration : number;
        /**
        * [SkinPart]实体滑块组件
        * @member egret.gui.TrackBase#thumb
        */ 
        public thumb: Button;
        /**
        * [SkinPart]实体轨道组件
        * @member egret.gui.TrackBase#track
        */
        public track: Button;
        /**
        * 最大有效值
        * @member egret.gui.TrackBase#maximum
        */
        /**
        * @inheritDoc
        */
        public maximum : number;
        /**
        * 最小有效值
        * @member egret.gui.TrackBase#minimum
        */
        /**
        * @inheritDoc
        */
        public minimum : number;
        /**
        * 此范围的当前值。
        * @member egret.gui.TrackBase#value
        */
        /**
        * @inheritDoc
        */
        public value : number;
        /**
        * @method egret.gui.TrackBase#setValue
        * @param value {number}
        */
        public setValue(value: number): void;
        /**
        * 将相对于轨道的 x,y 像素位置转换为介于最小值和最大值（包括两者）之间的一个值。
        * @method egret.gui.TrackBase#pointToValue
        * @param x {number} 相对于轨道原点的位置的x坐标。
        * @param y {number} 相对于轨道原点的位置的y坐标。
        * @returns {number}
        */ 
        public pointToValue(x: number, y: number): number;
        /**
        * @method egret.gui.TrackBase#changeValueByStep
        * @param increase {boolean}
        */
        public changeValueByStep(increase?: boolean): void;
        /**
        * @method egret.gui.TrackBase#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.TrackBase#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
        /**
        * @method egret.gui.TrackBase#updateDisplayList
        * @param w {number}
        * @param h {number}
        */
        public updateDisplayList(w: number, h: number): void;
        /**
        * 记录鼠标在thumb上按下的位置
        */ 
        public _clickOffsetX: number;
        public _clickOffsetY: number;
        /**
        * 更新皮肤部件（通常为滑块）的大小和可见性。<br/>
        * 子类覆盖此方法以基于 minimum、maximum 和 value 属性更新滑块的大小、位置和可见性。
        * @method egret.gui.TrackBase#updateSkinDisplayList
        */ 
        public updateSkinDisplayList(): void;
        /**
        * 添加到舞台时
        */ 
        private addedToStageHandler(event);
        /**
        * 轨道尺寸改变事件
        */ 
        private track_resizeHandler(event);
        /**
        * 滑块尺寸改变事件
        */ 
        private thumb_resizeHandler(event);
        /**
        * 滑块三个阶段的延迟布局更新完毕事件
        */ 
        private thumb_updateCompleteHandler(event);
        /**
        * 滑块按下事件
        * @method egret.gui.TrackBase#thumb_mouseDownHandler
        * @param event {TouchEvent}
        */ 
        public thumb_mouseDownHandler(event: TouchEvent): void;
        /**
        * 当鼠标拖动thumb时，需要更新value的标记。
        */ 
        private needUpdateValue;
        /**
        * 拖动thumb过程中触发的EnterFrame事件
        */ 
        private onEnterFrame(event);
        /**
        * 当thumb被拖动时更新值，此方法每帧只被调用一次，比直接在鼠标移动事件里更新性能更高。
        * @method egret.gui.TrackBase#updateWhenMouseMove
        */ 
        public updateWhenMouseMove(): void;
        public _moveStageX: number;
        public _moveStageY: number;
        /**
        * 鼠标移动事件
        * @method egret.gui.TrackBase#stage_mouseMoveHandler
        * @param event {TouchEvent}
        */ 
        public stage_mouseMoveHandler(event: TouchEvent): void;
        /**
        * 鼠标弹起事件
        * @method egret.gui.TrackBase#stage_mouseUpHandler
        * @param event {Event}
        */ 
        public stage_mouseUpHandler(event: Event): void;
        /**
        * 轨道被按下事件
        * @method egret.gui.TrackBase#track_mouseDownHandler
        * @param event {TouchEvent}
        */ 
        public track_mouseDownHandler(event: TouchEvent): void;
        private mouseDownTarget;
        /**
        * 当在组件上按下鼠标时记录被按下的子显示对象
        */ 
        private mouseDownHandler(event);
        /**
        * 当鼠标弹起时，若不是在mouseDownTarget上弹起，而是另外的子显示对象上弹起时，额外抛出一个鼠标单击事件。
        */ 
        private stage_mouseUpSomewhereHandler(event);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.SliderBase
    * @classdesc
    * 滑块控件基类
    * @extends egret.gui.TrackBase
    */
    class SliderBase extends TrackBase {
        /**
        * 构造函数
        * @method egret.gui.SliderBase#constructor
        */ 
        constructor();
        /**
        * [SkinPart]轨道高亮显示对象
        * @member egret.gui.SliderBase#trackHighlight
        */ 
        public trackHighlight: DisplayObject;
        private _showTrackHighlight;
        /**
        * 是否启用轨道高亮效果。默认值为true。
        * 注意，皮肤里的子部件trackHighlight要同时为非空才能显示高亮效果。
        * @member egret.gui.SliderBase#showTrackHighlight
        */
        public showTrackHighlight : boolean;
        /**
        * 动画实例
        */ 
        private animator;
        private _pendingValue;
        /**
        * 释放鼠标按键时滑块将具有的值。无论liveDragging是否为true，在滑块拖动期间始终更新此属性。
        * 而value属性在当liveDragging为false时，只在鼠标释放时更新一次。
        * @member egret.gui.SliderBase#pendingValue
        */
        public pendingValue : number;
        /**
        * @method egret.gui.SliderBase#setValue
        * @param value {number}
        */
        public setValue(value: number): void;
        /**
        * 动画播放更新数值
        */ 
        private animationUpdateHandler(animation);
        /**
        * 动画播放结束时要到达的value。
        */ 
        private slideToValue;
        /**
        * 动画播放完毕
        */ 
        private animationEndHandler(animation);
        /**
        * 停止播放动画
        */ 
        private stopAnimation();
        /**
        * @method egret.gui.SliderBase#thumb_mouseDownHandler
        * @param event {TouchEvent}
        */
        public thumb_mouseDownHandler(event: TouchEvent): void;
        private _liveDragging;
        /**
        * 如果为 true，则将在沿着轨道拖动滑块时，而不是在释放滑块按钮时，提交此滑块的值。
        * @member egret.gui.SliderBase#liveDragging
        */
        public liveDragging : boolean;
        /**
        * @method egret.gui.SliderBase#updateWhenMouseMove
        */
        public updateWhenMouseMove(): void;
        /**
        * @method egret.gui.SliderBase#stage_mouseUpHandler
        * @param event {Event}
        */
        public stage_mouseUpHandler(event: Event): void;
        /**
        * @method egret.gui.SliderBase#track_mouseDownHandler
        * @param event {TouchEvent}
        */
        public track_mouseDownHandler(event: TouchEvent): void;
        /**
        * @method egret.gui.SliderBase#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Label
    * @classdesc
    * 一行或多行不可编辑的文本控件
    * @extends egret.gui.TextBase
    */
    class Label extends TextBase {
        /**
        * @method egret.gui.Label#constructor
        */
        constructor();
        /**
        * 一个验证阶段完成
        */ 
        private updateCompleteHandler(event);
        private _maxDisplayedLines;
        /**
        * 最大显示行数,0或负值代表不限制。
        * @member egret.gui.Label#maxDisplayedLines
        */
        public maxDisplayedLines : number;
        /**
        * 上一次测量的宽度
        */ 
        private lastUnscaledWidth;
        private _padding;
        /**
        * 四个边缘的共同内边距。若单独设置了任一边缘的内边距，则该边缘的内边距以单独设置的值为准。
        * 此属性主要用于快速设置多个边缘的相同内边距。默认值：0。
        * @member egret.gui.Label#padding
        */
        public padding : number;
        private _paddingLeft;
        /**
        * 文字距离左边缘的空白像素,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.Label#paddingLeft
        */
        public paddingLeft : number;
        private _paddingRight;
        /**
        * 文字距离右边缘的空白像素,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.Label#paddingRight
        */
        public paddingRight : number;
        private _paddingTop;
        /**
        * 文字距离顶部边缘的空白像素,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.Label#paddingTop
        */
        public paddingTop : number;
        private _paddingBottom;
        /**
        * 文字距离底部边缘的空白像素,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.Label#paddingBottom
        */
        public paddingBottom : number;
        /**
        * @method egret.gui.Label#measure
        */
        public measure(): void;
        /**
        * 特殊情况，组件尺寸由父级决定，要等到父级UpdateDisplayList的阶段才能测量
        */ 
        private isSpecialCase();
        /**
        * 使用指定的宽度进行测量
        */ 
        private measureUsingWidth(w);
        /**
        * @method egret.gui.Label#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Rect
    * @classdesc
    * 矩形绘图元素。此组件可响应鼠标事件。
    * @extends egret.gui.UIComponent
    */
    class Rect extends UIComponent {
        /**
        * 构造函数
        * @method egret.gui.Rect#constructor
        */
        constructor();
        private _graphics;
        public graphics : Graphics;
        public _render(renderContext: RendererContext): void;
        private _fillColor;
        /**
        * 填充颜色
        * @member egret.gui.Rect#fillColor
        */
        public fillColor : number;
        private _fillAlpha;
        /**
        * 填充透明度,默认值为0。
        * @member egret.gui.Rect#fillAlpha
        */
        public fillAlpha : number;
        private _strokeColor;
        /**
        * 边框颜色,注意：当strokeAlpha为0时，不显示边框。
        * @member egret.gui.Rect#strokeColor
        */
        public strokeColor : number;
        private _strokeAlpha;
        /**
        * 边框透明度，默认值为0。
        * @member egret.gui.Rect#strokeAlpha
        */
        public strokeAlpha : number;
        private _strokeWeight;
        /**
        * 边框粗细(像素),注意：当strokeAlpha为0时，不显示边框。
        * @member egret.gui.Rect#strokeWeight
        */
        public strokeWeight : number;
        /**
        * @see egret.DisplayObject.measureBounds
        * @returns {Rectangle}
        * @private
        */
        public _measureBounds(): Rectangle;
        /**
        * @method egret.gui.Rect#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Button
    * @classdesc
    * 按钮控件
    * @extends egret.gui.ButtonBase
    */ 
    class Button extends ButtonBase {
        /**
        * @method egret.gui.Button#constructor
        */
        constructor();
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ToggleButton
    * @classdesc
    * 切换按钮
    * @extends egret.gui.ToggleButtonBase
    */ 
    class ToggleButton extends ToggleButtonBase {
        /**
        * 构造函数
        * @method egret.gui.ToggleButton#constructor
        */ 
        constructor();
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.CheckBox
    * @classdesc
    * 复选框
    * @extends egret.gui.ToggleButtonBase
    */ 
    class CheckBox extends ToggleButtonBase {
        /**
        * 构造函数
        * @method egret.gui.CheckBox#constructor
        */ 
        constructor();
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.RadioButtonGroup
    * @classdesc
    * 单选按钮组
    * @extends egret.EventDispatcher
    */
    class RadioButtonGroup extends EventDispatcher {
        /**
        * 构造函数
        * @method egret.gui.RadioButtonGroup#constructor
        */ 
        constructor();
        private static groupCount;
        /**
        * 组名
        * @member egret.gui.RadioButtonGroup#_name
        */ 
        public _name: string;
        /**
        * 单选按钮列表
        */ 
        private radioButtons;
        private _enabled;
        /**
        * 组件是否可以接受用户交互。默认值为true。设置此属性将影响组内所有单选按钮。
        * @member egret.gui.RadioButtonGroup#enabled
        */ 
        public enabled : boolean;
        /**
        * 组内单选按钮数量
        * @member egret.gui.RadioButtonGroup#numRadioButtons
        */ 
        public numRadioButtons : number;
        private _selectedValue;
        /**
        * 当前被选中的单选按钮的value属性值。注意，此属性仅当目标RadioButton在显示列表时有效。
        * @member egret.gui.RadioButtonGroup#selectedValue
        */ 
        public selectedValue : any;
        private _selection;
        /**
        * 当前被选中的单选按钮引用,注意，此属性仅当目标RadioButton在显示列表时有效。
        * @member egret.gui.RadioButtonGroup#selection
        */ 
        public selection : RadioButton;
        /**
        * 获取指定索引的单选按钮
        * @method egret.gui.RadioButtonGroup#getRadioButtonAt
        * @param index {number} 单选按钮的索引
        * @returns {RadioButton}
        */ 
        public getRadioButtonAt(index: number): RadioButton;
        /**
        * 添加单选按钮到组内
        * @method egret.gui.RadioButtonGroup#_addInstance
        * @param instance {RadioButton}
        */
        public _addInstance(instance: RadioButton): void;
        /**
        * 从组里移除单选按钮
        * @method egret.gui.RadioButtonGroup#_removeInstance
        * @param instance {RadioButton}
        */ 
        public _removeInstance(instance: RadioButton): void;
        /**
        * 执行从组里移除单选按钮
        */ 
        private doRemoveInstance(instance, addListener?);
        /**
        * 设置选中的单选按钮
        * @method egret.gui.RadioButtonGroup#_setSelection
        * @param value {RadioButton}
        * @param fireChange {boolean}
        */ 
        public _setSelection(value: RadioButton, fireChange?: boolean): void;
        /**
        * 改变选中项
        */ 
        private changeSelection(index, fireChange?);
        /**
        * 单选按钮添加到显示列表
        */ 
        private radioButton_addedHandler(event);
        /**
        * 单选按钮从显示列表移除
        */ 
        private radioButton_removedHandler(event);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.RadioButton
    * @classdesc
    * 单选按钮
    * @extends egret.gui.ToggleButtonBase
    */
    class RadioButton extends ToggleButtonBase {
        /**
        * 构造函数
        * @method egret.gui.RadioButton#constructor
        */
        constructor();
        /**
        * 在RadioButtonGroup中的索引
        * @member egret.gui.RadioButton#_indexNumber
        */ 
        public _indexNumber: number;
        /**
        * 所属的RadioButtonGroup
        * @member egret.gui.RadioButton#_radioButtonGroup
        */ 
        public _radioButtonGroup: RadioButtonGroup;
        /**
        * @member egret.gui.RadioButton#enabled
        */
        /**
        * @inheritDoc
        */
        public enabled : boolean;
        /**
        * 存储根据groupName自动创建的RadioButtonGroup列表
        */ 
        private static automaticRadioButtonGroups;
        private _group;
        /**
        * 此单选按钮所属的组。同一个组的多个单选按钮之间互斥。
        * 若不设置此属性，则根据groupName属性自动创建一个唯一的RadioButtonGroup。
        * @member egret.gui.RadioButton#group
        */ 
        public group : RadioButtonGroup;
        private groupChanged;
        private _groupName;
        /**
        * 所属组的名称,具有相同组名的多个单选按钮之间互斥。默认值:"radioGroup"。
        * 可以把此属性当做设置组的一个简便方式，作用与设置group属性相同,。
        * @member egret.gui.RadioButton#groupName
        */ 
        public groupName : string;
        /**
        * @inheritDoc
        */
        public _setSelected(value: boolean): void;
        private _value;
        /**
        * 与此单选按钮关联的自定义数据。
        * 当被点击时，所属的RadioButtonGroup对象会把此属性赋值给ItemClickEvent.item属性并抛出事件。
        * @member egret.gui.RadioButton#value
        */ 
        public value : any;
        /**
        * @method egret.gui.RadioButton#commitProperties
        */
        public commitProperties(): void;
        /**
        * @method egret.gui.RadioButton#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
        * @method egret.gui.RadioButton#buttonReleased
        */
        public buttonReleased(): void;
        /**
        * 添此单选按钮加到组
        */ 
        private addToGroup();
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Group
    * @classdesc
    * 自动布局容器
    * @extends egret.gui.GroupBase
    * @implements egret.gui.IVisualElementContainer
    */
    class Group extends GroupBase implements IVisualElementContainer {
        /**
        * @method egret.gui.Group#constructor
        */
        constructor();
        /**
        * createChildren()方法已经执行过的标志
        */ 
        private createChildrenCalled;
        /**
        * @method egret.gui.Group#createChildren
        */
        public createChildren(): void;
        /**
        * elementsContent改变标志
        */ 
        private elementsContentChanged;
        private _elementsContent;
        /**
        * 返回子元素列表
        */
        public _getElementsContent(): any[];
        /**
        * 设置容器子对象数组 。数组包含要添加到容器的子项列表，之前的已存在于容器中的子项列表被全部移除后添加列表里的每一项到容器。
        * 设置该属性时会对您输入的数组进行一次浅复制操作，所以您之后对该数组的操作不会影响到添加到容器的子项列表数量。
        */ 
        public elementsContent : any[];
        /**
        * 设置容器子对象列表
        */ 
        private setElementsContent(value);
        /**
        * @member egret.gui.Group#numElements
        */
        public numElements : number;
        /**
        * @method egret.gui.Group#getElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public getElementAt(index: number): IVisualElement;
        private checkForRangeError(index, addingElement?);
        /**
        * @method egret.gui.Group#addElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public addElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.Group#addElementAt
        * @param element {IVisualElement}
        * @param index {number}
        * @returns {IVisualElement}
        */
        public addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
        * @method egret.gui.Group#removeElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public removeElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.Group#removeElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public removeElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.Group#removeAllElements
        */
        public removeAllElements(): void;
        /**
        * @method egret.gui.Group#getElementIndex
        * @param element {IVisualElement}
        * @returns {number}
        */
        public getElementIndex(element: IVisualElement): number;
        /**
        * @method egret.gui.Group#setElementIndex
        * @param element {IVisualElement}
        * @param index {number}
        */
        public setElementIndex(element: IVisualElement, index: number): void;
        /**
        * @method egret.gui.Group#swapElements
        * @param element1 {IVisualElement}
        * @param element2 {IVisualElement}
        */
        public swapElements(element1: IVisualElement, element2: IVisualElement): void;
        /**
        * @method egret.gui.Group#swapElementsAt
        * @param index1 {number}
        * @param index2 {number}
        */
        public swapElementsAt(index1: number, index2: number): void;
        /**
        * 添加一个显示元素到容器
        * @method egret.gui.Group#_elementAdded
        * @param element {IVisualElement}
        * @param index {number}
        * @param notifyListeners {boolean}
        */ 
        public _elementAdded(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        /**
        * 从容器移除一个显示元素
        * @method egret.gui.Group#_elementRemoved
        * @param element {IVisualElement}
        * @param index {number}
        * @param notifyListeners {boolean}
        */ 
        public _elementRemoved(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        private static errorStr;
        /**
        * @method egret.gui.Group#addChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */ 
        public addChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.Group#addChildAt
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        * @returns {DisplayObject}
        */ 
        public addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
        * @method egret.gui.Group#removeChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */ 
        public removeChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.Group#removeChildAt
        * @deprecated
        * @param index {number}
        * @returns {DisplayObject}
        */ 
        public removeChildAt(index: number): DisplayObject;
        /**
        * @method egret.gui.Group#setChildIndex
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        */ 
        public setChildIndex(child: DisplayObject, index: number): void;
        /**
        * @method egret.gui.Group#swapChildren
        * @deprecated
        * @param child1 {DisplayObject}
        * @param child2 {DisplayObject}
        */ 
        public swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
        * @method egret.gui.Group#swapChildrenAt
        * @deprecated
        * @param index1 {number}
        * @param index2 {number}
        */ 
        public swapChildrenAt(index1: number, index2: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ViewStack
    * @classdesc
    * 层级堆叠容器,一次只显示一个子对象。
    * @extends egret.gui.Group
    * @implements egret.gui.IViewStack
    * @implements egret.gui.ICollection
    */
    class ViewStack extends Group implements IViewStack, ICollection {
        /**
        * 构造函数
        * @method egret.gui.ViewStack#constructor
        */ 
        constructor();
        /**
        * 此容器的布局对象为只读,默认限制为BasicLayout。
        * @member egret.gui.ViewStack#layout
        */ 
        public layout : LayoutBase;
        private _createAllChildren;
        /**
        * 是否立即初始化化所有子项。false表示当子项第一次被显示时再初始化它。默认值false。
        * @member egret.gui.ViewStack#createAllChildren
        */
        public createAllChildren : boolean;
        private _selectedChild;
        /**
        * @member egret.gui.ViewStack#selectedChild
        */ 
        public selectedChild : IVisualElement;
        /**
        * 未设置缓存选中项的值
        */
        private static NO_PROPOSED_SELECTION;
        /**
        * 在属性提交前缓存选中项索引
        */ 
        private proposedSelectedIndex;
        public _selectedIndex: number;
        /**
        * @member egret.gui.ViewStack#selectedIndex
        */ 
        public selectedIndex : number;
        private notifyTabBar;
        /**
        * 设置选中项索引
        * @method egret.gui.ViewStack#_setSelectedIndex
        * @param value {number}
        * @param notifyListeners {boolean}
        */ 
        public _setSelectedIndex(value: number, notifyListeners?: boolean): void;
        /**
        * 添加一个显示元素到容器
        * @method egret.gui.ViewStack#_elementAdded
        * @param element {IVisualElement}
        * @param index {number}
        * @param notifyListeners {boolean}
        */ 
        public _elementAdded(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        /**
        * 从容器移除一个显示元素
        * @method egret.gui.ViewStack#_elementRemoved
        * @param element {IVisualElement}
        * @param index {number}
        * @param notifyListeners {boolean}
        */ 
        public _elementRemoved(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        /**
        * 子项显示列表顺序发生改变。
        */ 
        private childOrderingChanged;
        /**
        * @method egret.gui.ViewStack#commitProperties
        */
        public commitProperties(): void;
        private commitSelection(newIndex);
        /**
        * @member egret.gui.ViewStack#length
        */ 
        public length : number;
        /**
        * @method egret.gui.ViewStack#getItemAt
        * @param index {number}
        * @returns {any}
        */ 
        public getItemAt(index: number): any;
        /**
        * @method egret.gui.ViewStack#getItemIndex
        * @param item {any}
        * @returns {number}
        */ 
        public getItemIndex(item: any): number;
        /**
        * 抛出事件
        */ 
        private dispatchCoEvent(kind?, location?, oldLocation?, items?, oldItems?);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Skin
    * @classdesc
    * 含有视图状态功能的皮肤基类。注意：为了减少嵌套层级，此皮肤没有继承显示对象，若需要显示对象版本皮肤，请使用Skin。
    * @see org.flexlite.domUI.components.supportClasses.Skin
    * @extends egret.EventDispatcher
    * @implements egret.gui.IStateClient
    * @implements egret.gui.ISkin
    * @implements egret.gui.IContainer
    */
    class Skin extends EventDispatcher implements IStateClient, ISkin, IContainer {
        /**
        * 构造函数
        * @method egret.gui.Skin#constructor
        */ 
        constructor();
        /**
        * 组件的最大测量宽度,仅影响measuredWidth属性的取值范围。
        * @member egret.gui.Skin#maxWidth
        */ 
        public maxWidth: number;
        /**
        * 组件的最小测量宽度,此属性设置为大于maxWidth的值时无效。仅影响measuredWidth属性的取值范围。
        * @member egret.gui.Skin#minWidth
        */
        public minWidth: number;
        /**
        * 组件的最大测量高度,仅影响measuredHeight属性的取值范围。
        * @member egret.gui.Skin#maxHeight
        */
        public maxHeight: number;
        /**
        * 组件的最小测量高度,此属性设置为大于maxHeight的值时无效。仅影响measuredHeight属性的取值范围。
        * @member egret.gui.Skin#minHeight
        */
        public minHeight: number;
        /**
        * 组件宽度
        * @member egret.gui.Skin#width
        */
        public width: number;
        /**
        * 组件高度
        * @member egret.gui.Skin#height
        */
        public height: number;
        private _initialized;
        /**
        * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
        * 请务必调用super.createChildren()以完成父类组件的初始化
        * @method egret.gui.Skin#createChildren
        */
        public createChildren(): void;
        private _hostComponent;
        /**
        * @member egret.gui.Skin#hostComponent
        */
        /**
        * @inheritDoc
        */
        public hostComponent : SkinnableComponent;
        public _setHostComponent(value: SkinnableComponent): void;
        private _elementsContent;
        /**
        * 返回子元素列表
        */
        public _getElementsContent(): any[];
        /**
        * 设置容器子对象数组 。数组包含要添加到容器的子项列表，之前的已存在于容器中的子项列表被全部移除后添加列表里的每一项到容器。
        * 设置该属性时会对您输入的数组进行一次浅复制操作，所以您之后对该数组的操作不会影响到添加到容器的子项列表数量。
        */ 
        public elementsContent : any[];
        /**
        * @member egret.gui.Skin#numElements
        */
        public numElements : number;
        /**
        * @method egret.gui.Skin#getElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public getElementAt(index: number): IVisualElement;
        private checkForRangeError(index, addingElement?);
        /**
        * @method egret.gui.Skin#addElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public addElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.Skin#addElementAt
        * @param element {IVisualElement}
        * @param index {number}
        * @returns {IVisualElement}
        */
        public addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
        * @method egret.gui.Skin#removeElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public removeElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.Skin#removeElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public removeElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.Skin#getElementIndex
        * @param element {IVisualElement}
        * @returns {number}
        */
        public getElementIndex(element: IVisualElement): number;
        /**
        * @method egret.gui.Skin#setElementIndex
        * @param element {IVisualElement}
        * @param index {number}
        */
        public setElementIndex(element: IVisualElement, index: number): void;
        /**
        * 添加一个显示元素到容器
        * @method egret.gui.Skin#_elementAdded
        * @param element {IVisualElement}
        * @param index {number}
        * @param notifyListeners {boolean}
        */ 
        public _elementAdded(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        /**
        * 从容器移除一个显示元素
        * @method egret.gui.Skin#_elementRemoved
        * @param element {IVisualElement}
        * @param index {number}
        * @param notifyListeners {boolean}
        */ 
        public _elementRemoved(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        private _states;
        /**
        * 为此组件定义的视图状态。
        * @member egret.StateClientHelper#states
        */
        public states : any[];
        public _setStates(value: any[]): void;
        /**
        * 当前视图状态发生改变的标志
        */
        private currentStateChanged;
        private _currentState;
        /**
        * 存储还未验证的视图状态
        */
        private requestedCurrentState;
        /**
        * 组件的当前视图状态。将其设置为 "" 或 null 可将组件重置回其基本状态。
        * @member egret.StateClientHelper#currentState
        */
        public currentState : string;
        /**
        * 返回是否含有指定名称的视图状态
        * @method egret.gui.Skin#hasState
        * @param stateName {string}
        * @returns {boolean}
        */
        public hasState(stateName: string): boolean;
        /**
        * 返回默认状态
        */
        private getDefaultState();
        /**
        * 应用当前的视图状态。子类覆盖此方法在视图状态发生改变时执行相应更新操作。
        * @method egret.gui.Skin#commitCurrentState
        */
        public commitCurrentState(): void;
        /**
        * 通过名称返回视图状态
        */
        private getState(stateName);
        /**
        * 移除指定的视图状态以及所依赖的所有父级状态，除了与新状态的共同状态外
        */
        private removeState(stateName);
        /**
        * 应用新状态
        */
        private applyState(stateName);
        private initialized;
        /**
        * 初始化所有视图状态
        * @method egret.StateClientHelper#initializeStates
        */
        public initializeStates(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.DataGroup
    * @classdesc
    * 数据项目的容器基类
    * 将数据项目转换为可视元素以进行显示。
    * @extends egret.gui.GroupBase
    */
    class DataGroup extends GroupBase {
        /**
        * 构造函数
        * @method egret.gui.DataGroup#constructor
        */ 
        constructor();
        /**
        * @method egret.gui.DataGroup.defaultRendererFactory
        * @param ClassFactory {any}
        */
        static defaultRendererFactory: ClassFactory;
        /**
        * 项呈示器的主机组件
        */
        public _rendererOwner: IItemRendererOwner;
        private useVirtualLayoutChanged;
        /**
        * @member egret.gui.DataGroup#layout
        */
        /**
        * @inheritDoc
        */
        public layout : LayoutBase;
        /**
        * 是否使用虚拟布局标记改变
        */ 
        private layout_useVirtualLayoutChangedHandler(event);
        /**
        * 存储当前可见的项呈示器索引列表
        */ 
        private virtualRendererIndices;
        /**
        * @method egret.gui.DataGroup#setVirtualElementIndicesInView
        * @param startIndex {number}
        * @param endIndex {number}
        */
        public setVirtualElementIndicesInView(startIndex: number, endIndex: number): void;
        /**
        * @method egret.gui.DataGroup#getVirtualElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public getVirtualElementAt(index: number): IVisualElement;
        private rendererToClassMap;
        private freeRenderers;
        /**
        * 释放指定索引处的项呈示器
        */ 
        private freeRendererByIndex(index);
        /**
        * 释放指定的项呈示器
        */ 
        private doFreeRenderer(renderer);
        /**
        * 是否创建了新的项呈示器标志
        */ 
        private createNewRendererFlag;
        /**
        * @method egret.gui.DataGroup#invalidateSize
        */
        public invalidateSize(): void;
        /**
        * 为指定索引创建虚拟的项呈示器
        */ 
        private createVirtualRenderer(index);
        /**
        * 根据rendererClass创建一个Renderer,并添加到显示列表
        */ 
        private createOneRenderer(rendererFactory);
        /**
        * 设置项呈示器的默认皮肤
        */ 
        private setItemRenderSkinName(renderer);
        private cleanTimer;
        /**
        * 虚拟布局结束清理不可见的项呈示器
        */ 
        private finishVirtualLayout();
        /**
        * 延迟清理多余的在显示列表中的ItemRenderer。
        */ 
        private cleanAllFreeRenderer(event?);
        /**
        * @method egret.gui.DataGroup#getElementIndicesInView
        * @returns {number}
        */
        public getElementIndicesInView(): number[];
        /**
        * 更改是否使用虚拟布局
        */ 
        private changeUseVirtualLayout();
        private dataProviderChanged;
        private _dataProvider;
        /**
        * 列表数据源，请使用实现了ICollection接口的数据类型，例如ArrayCollection
        * @member egret.gui.DataGroup#dataProvider
        */
        public dataProvider : ICollection;
        /**
        * 移除数据源监听
        */ 
        private removeDataProviderListener();
        /**
        * 数据源改变事件处理
        */ 
        private onCollectionChange(event);
        /**
        * 数据源添加项目事件处理
        */ 
        private itemAddedHandler(items, index);
        /**
        * 数据源移动项目事件处理
        */ 
        private itemMovedHandler(item, location, oldLocation);
        /**
        * 数据源移除项目事件处理
        */ 
        private itemRemovedHandler(items, location);
        /**
        * 添加一项
        */ 
        private itemAdded(item, index);
        /**
        * 移除一项
        */ 
        private itemRemoved(item, index);
        /**
        * 对象池字典
        */ 
        private recyclerDic;
        /**
        * 回收一个ItemRenderer实例
        */ 
        private recycle(renderer);
        /**
        * 更新当前所有项的索引
        */ 
        private resetRenderersIndices();
        /**
        * 数据源更新或替换项目事件处理
        */ 
        private itemUpdatedHandler(item, location);
        /**
        * 调整指定项呈示器的索引值
        */ 
        private resetRendererItemIndex(index);
        /**
        * 项呈示器改变
        */ 
        private itemRendererChanged;
        /**
        * 这里不直接使用Class类型是因为JS里不能用对象作为键，所以需要hashCode。而只有实例对象才有hashCode，Class无法作为键。
        */
        private _itemRenderer;
        /**
        * 用于数据项目的项呈示器。该类必须实现 IItemRenderer 接口。<br/>
        * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。
        * @member egret.gui.DataGroup#itemRenderer
        */
        public itemRenderer : IFactory;
        private itemRendererSkinNameChange;
        private _itemRendererSkinName;
        /**
        * 条目渲染器的可选皮肤标识符。在实例化itemRenderer时，若其内部没有设置过skinName,则将此属性的值赋值给它的skinName。
        * 注意:若itemRenderer不是ISkinnableClient，则此属性无效。
        * @member egret.gui.DataGroup#itemRendererSkinName
        */
        public itemRendererSkinName : any;
        private _itemRendererFunction;
        /**
        * 为某个特定项目返回一个项呈示器Class的函数。<br/>
        * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。<br/>
        * 应该定义一个与此示例函数类似的呈示器函数： <br/>
        * function myItemRendererFunction(item:Object):IFactory
        * @member egret.gui.DataGroup#itemRendererFunction
        */ 
        public itemRendererFunction : Function;
        /**
        * 为特定的数据项返回项呈示器的工厂实例
        */ 
        private itemToRendererClass(item);
        /**
        * @method egret.gui.DataGroup#createChildren
        * 设置默认的ItemRenderer
        * @private
        *
        */ 
        public createChildren(): void;
        /**
        * @method egret.gui.DataGroup#commitProperties
        */
        public commitProperties(): void;
        /**
        * @method egret.gui.DataGroup#measure
        */
        public measure(): void;
        /**
        * 正在进行虚拟布局阶段
        */ 
        private virtualLayoutUnderway;
        /**
        * @method egret.gui.DataGroup#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
        * 用于测试默认大小的数据
        */
        private typicalItem;
        private typicalItemChanged;
        /**
        * 确保测量过默认条目大小。
        */
        private ensureTypicalLayoutElement();
        /**
        * 测量项呈示器默认尺寸
        */ 
        private measureRendererSize();
        /**
        * 项呈示器的默认尺寸
        */ 
        private typicalLayoutRect;
        /**
        * 设置项目默认大小
        */ 
        private setTypicalLayoutRect(rect);
        /**
        * 索引到项呈示器的转换数组
        */ 
        private indexToRenderer;
        /**
        * 清理freeRenderer标志
        */ 
        private cleanFreeRenderer;
        /**
        * 移除所有项呈示器
        */ 
        private removeAllRenderers();
        /**
        * 为数据项创建项呈示器
        */ 
        private createRenderers();
        /**
        * 正在更新数据项的标志
        */ 
        private renderersBeingUpdated;
        /**
        * 更新项呈示器
        * @method egret.gui.DataGroup#updateRenderer
        * @param renderer {IItemRenderer}
        * @param itemIndex {number}
        * @param data {any}
        * @returns {IItemRenderer}
        */ 
        public updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
        * 返回可在项呈示器中显示的 String。
        * 若DataGroup被作为SkinnableDataContainer的皮肤组件,此方法将不会执行，被SkinnableDataContainer.itemToLabel()所替代。
        * @method egret.gui.DataGroup#itemToLabel
        * @param item {any}
        * @returns {string}
        */ 
        public itemToLabel(item: any): string;
        /**
        * @method egret.gui.DataGroup#getElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public getElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.DataGroup#getElementIndex
        * @param element {IVisualElement}
        * @returns {number}
        */
        public getElementIndex(element: IVisualElement): number;
        /**
        * @member egret.gui.DataGroup#numElements
        */
        public numElements : number;
        private static errorStr;
        /**
        * @method egret.gui.DataGroup#addChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */ 
        public addChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.DataGroup#addChildAt
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        * @returns {DisplayObject}
        */ 
        public addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
        * @method egret.gui.DataGroup#removeChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */ 
        public removeChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.DataGroup#removeChildAt
        * @deprecated
        * @param index {number}
        * @returns {DisplayObject}
        */ 
        public removeChildAt(index: number): DisplayObject;
        /**
        * @method egret.gui.DataGroup#setChildIndex
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        */ 
        public setChildIndex(child: DisplayObject, index: number): void;
        /**
        * @method egret.gui.DataGroup#swapChildren
        * @deprecated
        * @param child1 {DisplayObject}
        * @param child2 {DisplayObject}
        */ 
        public swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
        * @method egret.gui.DataGroup#swapChildrenAt
        * @deprecated
        * @param index1 {number}
        * @param index2 {number}
        */ 
        public swapChildrenAt(index1: number, index2: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.SkinnableContainer
    * @classdesc
    * 可设置外观的容器的基类
    * @extends egret.gui.SkinnableComponent
    * @implements egret.gui.IVisualElementContainer
    */
    class SkinnableContainer extends SkinnableComponent implements IVisualElementContainer {
        /**
        * @method egret.gui.SkinnableContainer#constructor
        */
        constructor();
        /**
        * [SkinPart]实体容器
        * @member egret.gui.SkinnableContainer#contentGroup
        */
        public contentGroup: Group;
        /**
        * 实体容器实例化之前缓存子对象的容器
        */
        public _placeHolderGroup: Group;
        public a: any;
        /**
        * 获取当前的实体容器
        */
        public _getCurrentContentGroup(): Group;
        /**
        * 设置容器子对象数组 。数组包含要添加到容器的子项列表，之前的已存在于容器中的子项列表被全部移除后添加列表里的每一项到容器。
        * 设置该属性时会对您输入的数组进行一次浅复制操作，所以您之后对该数组的操作不会影响到添加到容器的子项列表数量。
        */
        public elementsContent : any[];
        /**
        * @member egret.gui.SkinnableContainer#numElements
        */
        public numElements : number;
        /**
        * @method egret.gui.SkinnableContainer#getElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public getElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.SkinnableContainer#addElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public addElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.SkinnableContainer#addElementAt
        * @param element {IVisualElement}
        * @param index {number}
        * @returns {IVisualElement}
        */
        public addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
        * @method egret.gui.SkinnableContainer#removeElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public removeElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.SkinnableContainer#removeElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public removeElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.SkinnableContainer#removeAllElements
        */
        public removeAllElements(): void;
        /**
        * @method egret.gui.SkinnableContainer#getElementIndex
        * @param element {IVisualElement}
        * @returns {number}
        */
        public getElementIndex(element: IVisualElement): number;
        /**
        * @method egret.gui.SkinnableContainer#setElementIndex
        * @param element {IVisualElement}
        * @param index {number}
        */
        public setElementIndex(element: IVisualElement, index: number): void;
        /**
        * @method egret.gui.SkinnableContainer#swapElements
        * @param element1 {IVisualElement}
        * @param element2 {IVisualElement}
        */
        public swapElements(element1: IVisualElement, element2: IVisualElement): void;
        /**
        * @method egret.gui.SkinnableContainer#swapElementsAt
        * @param index1 {number}
        * @param index2 {number}
        */
        public swapElementsAt(index1: number, index2: number): void;
        /**
        * contentGroup发生改变时传递的参数
        */
        private contentGroupProperties;
        /**
        * 此容器的布局对象
        * @member egret.gui.SkinnableContainer#layout
        */
        public layout : LayoutBase;
        /**
        * @method egret.gui.SkinnableContainer#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.SkinnableContainer#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
        /**
        * 容器添加元素事件
        * @method egret.gui.SkinnableContainer#_contentGroup_elementAddedHandler
        * @param event {ElementExistenceEvent}
        */
        public _contentGroup_elementAddedHandler(event: ElementExistenceEvent): void;
        /**
        * 容器移除元素事件
        * @method egret.gui.SkinnableContainer#_contentGroup_elementRemovedHandler
        * @param event {ElementExistenceEvent}
        */
        public _contentGroup_elementRemovedHandler(event: ElementExistenceEvent): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.SkinnableDataContainer
    * @classdesc
    * 可设置外观的数据项目容器基类
    * @extends egret.gui.SkinnableComponent
    * @implements egret.gui.IItemRendererOwner
    */
    class SkinnableDataContainer extends SkinnableComponent implements IItemRendererOwner {
        /**
        * 构造函数
        * @method egret.gui.SkinnableDataContainer#constructor
        */ 
        constructor();
        /**
        * @method egret.gui.SkinnableDataContainer#updateRenderer
        * @param renderer {IItemRenderer}
        * @param itemIndex {number}
        * @param data {any}
        * @returns {IItemRenderer}
        */
        public updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
        * 返回可在项呈示器中显示的 String
        * @method egret.gui.SkinnableDataContainer#itemToLabel
        * @param item {any}
        * @returns {string}
        */ 
        public itemToLabel(item: any): string;
        /**
        * [SkinPart]数据项目容器实体
        * @member egret.gui.SkinnableDataContainer#dataGroup
        */ 
        public dataGroup: DataGroup;
        /**
        * dataGroup发生改变时传递的参数
        */ 
        public _dataGroupProperties: any;
        /**
        * 列表数据源，请使用实现了ICollection接口的数据类型，例如ArrayCollection
        * @member egret.gui.SkinnableDataContainer#dataProvider
        */ 
        public dataProvider : ICollection;
        public _getDataProvider(): ICollection;
        public _setDataProvider(value: ICollection): void;
        /**
        * 用于数据项目的项呈示器。该类必须实现 IItemRenderer 接口。 <br/>
        * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。
        * @member egret.gui.SkinnableDataContainer#itemRenderer
        */ 
        public itemRenderer : IFactory;
        /**
        * 条目渲染器的可选皮肤标识符。在实例化itemRenderer时，若其内部没有设置过skinName,则将此属性的值赋值给它的skinName。
        * 注意:若itemRenderer不是ISkinnableClient，则此属性无效。
        * @member egret.gui.SkinnableDataContainer#itemRendererSkinName
        */ 
        public itemRendererSkinName : any;
        /**
        * 为某个特定项目返回一个项呈示器Class的函数。 <br/>
        * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。 <br/>
        * 应该定义一个与此示例函数类似的呈示器函数： <br/>
        * function myItemRendererFunction(item:Object):IFactory
        * @member egret.gui.SkinnableDataContainer#itemRendererFunction
        */ 
        public itemRendererFunction : Function;
        /**
        * 布局对象
        * @member egret.gui.SkinnableDataContainer#layout
        */ 
        public layout : LayoutBase;
        public _setLayout(value: LayoutBase): void;
        /**
        * @method egret.gui.SkinnableDataContainer#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.SkinnableDataContainer#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
        /**
        * @method egret.gui.SkinnableDataContainer#addEventListener
        * @param type {string}
        * @param listener {Function}
        * @param thisObject {any}
        * @param useCapture {boolean}
        * @param priority {number}
        */
        public addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        /**
        * @method egret.gui.SkinnableDataContainer#removeEventListener
        * @param type {string}
        * @param listener {Function}
        * @param thisObject {any}
        * @param useCapture {boolean}
        */
        public removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ListBase
    * @classdesc
    * 支持选择内容的所有组件的基类。
    * @extends egret.gui.SkinnableDataContainer
    */
    class ListBase extends SkinnableDataContainer {
        /**
        * 未选中任何项时的索引值
        * @constant egret.gui.ListBase.NO_SELECTION
        */ 
        static NO_SELECTION: number;
        /**
        * 未设置缓存选中项的值
        * @constant egret.gui.ListBase.NO_PROPOSED_SELECTION
        */
        static NO_PROPOSED_SELECTION: number;
        /**
        * 自定义的选中项
        * @constant egret.gui.ListBase.CUSTOM_SELECTED_ITEM
        */ 
        static CUSTOM_SELECTED_ITEM: number;
        /**
        * @method egret.gui.ListBase#constructor
        */
        constructor();
        /**
        * 正在进行所有数据源的刷新操作
        * @member egret.gui.ListBase#_doingWholesaleChanges
        */ 
        public _doingWholesaleChanges: boolean;
        private dataProviderChanged;
        public _setDataProvider(value: any): void;
        /**
        * 布局对象
        * @member egret.gui.ListBase#layout
        */
        /**
        * @inheritDoc
        */
        public layout : LayoutBase;
        private _labelField;
        private labelFieldOrFunctionChanged;
        /**
        * 数据项如果是一个对象，此属性为数据项中用来显示标签文字的字段名称。
        * 若设置了labelFunction，则设置此属性无效。
        * @member egret.gui.ListBase#labelField
        */ 
        public labelField : string;
        public _setLabelField(value: string): void;
        private _labelFunction;
        /**
        * 用户提供的函数，在每个项目上运行以确定其标签。
        * 示例：function labelFunc(item:Object):String 。
        * @member egret.gui.ListBase#labelFunction
        */ 
        public labelFunction : Function;
        public _setLabelFunction(value: Function): void;
        public _requireSelection: boolean;
        private requireSelectionChanged;
        /**
        * 如果为 true，则必须始终在控件中选中数据项目。<br/>
        * 如果该值为 true，则始终将 selectedIndex 属性设置为 0 和 (dataProvider.length - 1) 之间的一个值。
        * @member egret.gui.ListBase#requireSelection
        */ 
        public requireSelection : boolean;
        public _setRequireSelection(value: boolean): void;
        /**
        * 在属性提交前缓存真实的选中项的值
        */
        public _proposedSelectedIndex: number;
        public _selectedIndex: number;
        /**
        * 选中项目的基于 0 的索引。<br/>
        * 或者如果未选中项目，则为-1。设置 selectedIndex 属性会取消选择当前选定的项目并选择指定索引位置的数据项目。 <br/>
        * 当用户通过与控件交互来更改 selectedIndex 属性时，此控件将分派 change 和 changing 事件。<br/>
        * 当以编程方式更改 selectedIndex 属性的值时，此控件不分派 change 和 changing 事件。
        * @member egret.gui.ListBase#selectedIndex
        */ 
        public selectedIndex : number;
        public _getSelectedIndex(): number;
        /**
        * 是否允许自定义的选中项
        * @member egret.gui.ListBase#_allowCustomSelectedItem
        */ 
        public _allowCustomSelectedItem: boolean;
        /**
        * 索引改变后是否需要抛出事件
        * @member egret.gui.ListBase#_dispatchChangeAfterSelection
        */ 
        public _dispatchChangeAfterSelection: boolean;
        /**
        * 设置选中项
        */
        public _setSelectedIndex(value: number, dispatchChangeEvent?: boolean): void;
        /**
        *  在属性提交前缓存真实选中项的数据源
        */
        public _pendingSelectedItem: any;
        private _selectedItem;
        /**
        * 当前已选中的项目。设置此属性会取消选中当前选定的项目并选择新指定的项目。<br/>
        * 当用户通过与控件交互来更改 selectedItem 属性时，此控件将分派 change 和 changing 事件。<br/>
        * 当以编程方式更改 selectedItem 属性的值时，此控件不分派 change 和 changing 事件。
        * @member egret.gui.ListBase#selectedItem
        */ 
        public selectedItem : any;
        /**
        * 设置选中项数据源
        * @method egret.gui.ListBase#_setSelectedItem
        * @param value {any}
        * @param dispatchChangeEvent {boolean}
        */
        public _setSelectedItem(value: any, dispatchChangeEvent?: boolean): void;
        private _useVirtualLayout;
        /**
        * 是否使用虚拟布局,默认flase
        * @member egret.gui.ListBase#useVirtualLayout
        */
        public useVirtualLayout : boolean;
        public _getUseVirtualLayout(): boolean;
        public _setUseVirtualLayout(value: boolean): void;
        /**
        * @method egret.gui.ListBase#commitProperties
        */
        public commitProperties(): void;
        /**
        *  更新项呈示器文字标签
        */
        private updateRendererLabelProperty(itemIndex);
        /**
        * @method egret.gui.ListBase#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.ListBase#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
        /**
        * @method egret.gui.ListBase#updateRenderer
        * @param renderer {IItemRenderer}
        * @param itemIndex {number}
        * @param data {any}
        * @returns {IItemRenderer}
        */
        public updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
        * @method egret.gui.ListBase#itemToLabel
        * @param item {any}
        * @returns {string}
        */
        public itemToLabel(item: any): string;
        /**
        * 选中或取消选中项目时调用。子类必须覆盖此方法才可设置选中项。
        * @method egret.gui.ListBase#itemSelected
        * @param index {number} 已选中的项目索引。
        * @param selected {boolean} true为选中，false取消选中
        */ 
        public itemSelected(index: number, selected: boolean): void;
        /**
        * 返回指定索引是否等于当前选中索引
        */
        public _isItemIndexSelected(index: number): boolean;
        /**
        * 提交选中项属性，返回是否成功提交，false表示被取消
        * @method egret.gui.ListBase#commitSelection
        * @param dispatchChangedEvents {boolean}
        * @returns {boolean}
        */ 
        public commitSelection(dispatchChangedEvents?: boolean): boolean;
        private selectedIndexAdjusted;
        /**
        * 仅调整选中索引值而不更新选中项,即在提交属性阶段itemSelected方法不会被调用，也不会触发changing和change事件。
        * @method egret.gui.ListBase#adjustSelection
        * @param newIndex {number} 新索引。
        * @param add {boolean} 如果已将项目添加到组件，则为 true；如果已删除项目，则为 false。
        */ 
        public adjustSelection(newIndex: number, add?: boolean): void;
        /**
        * 数据项添加
        * @method egret.gui.ListBase#itemAdded
        * @param index {number}
        */
        public itemAdded(index: number): void;
        /**
        * 数据项移除
        * @method egret.gui.ListBase#itemRemoved
        * @param index {number}
        */
        public itemRemoved(index: number): void;
        /**
        * 项呈示器被添加
        * @method egret.gui.ListBase#dataGroup_rendererAddHandler
        * @param event {RendererExistenceEvent}
        */
        public dataGroup_rendererAddHandler(event: RendererExistenceEvent): void;
        /**
        * 项呈示器被移除
        * @method egret.gui.ListBase#dataGroup_rendererRemoveHandler
        * @param event {RendererExistenceEvent}
        */ 
        public dataGroup_rendererRemoveHandler(event: RendererExistenceEvent): void;
        private static TYPE_MAP;
        /**
        * 项呈示器鼠标事件
        */ 
        private item_mouseEventHandler(event);
        /**
        * 抛出列表事件
        * @method egret.gui.ListBase#_dispatchListEvent
        * @param touchEvent {TouchEvent} 相关联的鼠标事件
        * @param type {string} 事件名称
        * @param itemRenderer {IItemRenderer} 关联的条目渲染器实例
        */ 
        public _dispatchListEvent(touchEvent: TouchEvent, type: string, itemRenderer: IItemRenderer): void;
        /**
        * 数据源发生改变
        * @method egret.gui.ListBase#dataProvider_collectionChangeHandler
        * @param event {CollectionEvent}
        */
        public dataProvider_collectionChangeHandler(event: CollectionEvent): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Panel
    * @classdesc
    * 带有标题，内容区域的面板组件
    * @extends egret.gui.SkinnableContainer
    */ 
    class Panel extends SkinnableContainer {
        /**
        * 构造函数
        * @method egret.gui.Panel#constructor
        */
        constructor();
        /**
        * [SkinPart]标题显示对象
        * @member egret.gui.Panel#titleDisplay
        */
        public titleDisplay: IDisplayText;
        private _title;
        /**
        * 标题内容改变
        */
        private titleChanged;
        /**
        * 标题文本内容
        * @member egret.gui.Panel#title
        */
        public title : string;
        /**
        * @method egret.gui.Panel#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TitleWindow
    * @classdesc
    * 可移动窗口组件。注意，此窗口必须使用PopUpManager.addPopUp()弹出之后才能移动。
    * @extends egret.gui.Panel
    */
    class TitleWindow extends Panel {
        /**
        * @method egret.gui.TitleWindow#constructor
        */
        constructor();
        /**
        * 在窗体上按下时前置窗口
        */ 
        private onWindowMouseDown(event);
        /**
        * [SkinPart]关闭按钮
        * @member egret.gui.TitleWindow#closeButton
        */ 
        public closeButton: Button;
        /**
        * [SkinPart]可移动区域
        * @member egret.gui.TitleWindow#moveArea
        */ 
        public moveArea: DisplayObject;
        private _showCloseButton;
        /**
        * 是否显示关闭按钮,默认true。
        * @member egret.gui.TitleWindow#showCloseButton
        */
        public showCloseButton : boolean;
        private _autoBackToStage;
        /**
        * 在拖拽窗口时，有可能把窗口完全拖出屏幕外，导致无法点中moveArea而不能拖回屏幕。
        * 此属性为true时，将会在拖拽结束时，自动调整窗口位置，使moveArea可以被再次点中。
        * 反之不调整。默认值为true。
        * @member egret.gui.TitleWindow#autoBackToStage
        */
        public autoBackToStage : boolean;
        /**
        * @method egret.gui.TitleWindow#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.TitleWindow#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
        /**
        * @method egret.gui.TitleWindow#closeButton_clickHandler
        * @param event {TouchEvent}
        */
        public closeButton_clickHandler(event: TouchEvent): void;
        /**
        * 鼠标按下时的偏移量
        */ 
        private _offsetPointX;
        private _offsetPointY;
        /**
        * 鼠标在可移动区域按下
        * @method egret.gui.TitleWindow#moveArea_mouseDownHandler
        * @param event {TouchEvent}
        */ 
        public moveArea_mouseDownHandler(event: TouchEvent): void;
        /**
        * 鼠标拖拽时的移动事件
        * @method egret.gui.TitleWindow#moveArea_mouseMoveHandler
        * @param event {TouchEvent}
        */ 
        public moveArea_mouseMoveHandler(event: TouchEvent): void;
        /**
        * 鼠标在舞台上弹起事件
        * @method egret.gui.TitleWindow#moveArea_mouseUpHandler
        * @param event {Event}
        */ 
        public moveArea_mouseUpHandler(event: Event): void;
        /**
        * 调整窗口位置，使其可以在舞台中被点中
        */ 
        private adjustPosForStage();
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Alert
    * @classdesc
    * 弹出对话框，可能包含消息、标题、按钮（“确定”、“取消”、“是”和“否”的任意组合)。
    * @extends egret.gui.TitleWindow
    */
    class Alert extends TitleWindow {
        /**
        * 当对话框关闭时，closeEvent.detail的值若等于此属性,表示被点击的按钮为firstButton。
        * @constant egret.gui.Alert.FIRST_BUTTON
        */
        static FIRST_BUTTON: string;
        /**
        * 当对话框关闭时，closeEvent.detail的值若等于此属性,表示被点击的按钮为secondButton。
        * @constant egret.gui.Alert.SECOND_BUTTON
        */
        static SECOND_BUTTON: string;
        /**
        * 当对话框关闭时，closeEvent.detail的值若等于此属性,表示被点击的按钮为closeButton。
        * @constant egret.gui.Alert.CLOSE_BUTTON
        */
        static CLOSE_BUTTON: string;
        /**
        * 弹出Alert控件的静态方法。在Alert控件中选择一个按钮，将关闭该控件。
        * @method egret.gui.Alert.show
        * @param text {string} 要显示的文本内容字符串。
        * @param title {string} 对话框标题
        * @param closeHandler {Function} 按下Alert控件上的任意按钮时的回调函数。示例:closeHandler(event:CloseEvent);
        * event的detail属性包含 Alert.FIRST_BUTTON、Alert.SECOND_BUTTON和Alert.CLOSE_BUTTON。
        * @param firstButtonLabel {string} 第一个按钮上显示的文本。
        * @param secondButtonLabel {string} 第二个按钮上显示的文本，若为null，则不显示第二个按钮。
        * @param modal {boolean} 是否启用模态。即禁用弹出框以下的鼠标事件。默认true。
        * @param center {boolean} 是否居中。默认true。
        * @returns {Alert}
        */
        static show(text?: string, title?: string, closeHandler?: Function, firstButtonLabel?: string, secondButtonLabel?: string, modal?: boolean, center?: boolean): Alert;
        /**
        * 构造函数，请通过静态方法Alert.show()来创建对象实例。
        * @method egret.gui.Alert#constructor
        */
        constructor();
        private _firstButtonLabel;
        /**
        * 第一个按钮上显示的文本
        * @member egret.gui.Alert#firstButtonLabel
        */
        public firstButtonLabel : string;
        private _secondButtonLabel;
        /**
        * 第二个按钮上显示的文本
        * @member egret.gui.Alert#secondButtonLabel
        */
        public secondButtonLabel : string;
        private _contentText;
        /**
        * 文本内容
        * @member egret.gui.Alert#contentText
        */
        public contentText : string;
        /**
        * 对话框关闭回调函数
        */
        private closeHandler;
        /**
        * 关闭事件
        */
        private onClose(event);
        /**
        * @method egret.gui.Alert#closeButton_clickHandler
        * @param event {TouchEvent}
        */
        public closeButton_clickHandler(event: TouchEvent): void;
        /**
        * [SkinPart]文本内容显示对象
        * @member egret.gui.Alert#contentDisplay
        */
        public contentDisplay: IDisplayText;
        /**
        * [SkinPart]第一个按钮，通常是"确定"。
        * @member egret.gui.Alert#firstButton
        */
        public firstButton: Button;
        /**
        * [SkinPart]第二个按钮，通常是"取消"。
        * @member egret.gui.Alert#secondButton
        */
        public secondButton: Button;
        /**
        * @method egret.gui.Alert#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.Alert#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ProgressBar
    * @classdesc
    * 进度条控件。
    * @extends egret.gui.Range
    */
    class ProgressBar extends Range {
        /**
        * @method egret.gui.ProgressBar#constructor
        */
        constructor();
        /**
        * [SkinPart]进度高亮显示对象。
        * @member egret.gui.ProgressBar#thumb
        */
        public thumb: DisplayObject;
        /**
        * [SkinPart]轨道显示对象，用于确定thumb要覆盖的区域。
        * @member egret.gui.ProgressBar#track
        */
        public track: DisplayObject;
        /**
        * [SkinPart]进度条文本
        * @member egret.gui.ProgressBar#labelDisplay
        */
        public labelDisplay: Label;
        private _labelFunction;
        /**
        * 进度条文本格式化回调函数。示例：labelFunction(value:Number,maximum:Number):String;
        * @member egret.gui.ProgressBar#labelFunction
        */
        public labelFunction : Function;
        /**
        * 将当前value转换成文本
        * @method egret.gui.ProgressBar#valueToLabel
        * @param value {number}
        * @param maximum {number}
        * @returns {string}
        */
        public valueToLabel(value: number, maximum: number): string;
        private _slideDuration;
        /**
        * value改变时调整thumb长度的缓动动画时间，单位毫秒。设置为0则不执行缓动。默认值500。
        * @member egret.gui.ProgressBar#slideDuration
        */
        public slideDuration : number;
        private _direction;
        /**
        * 进度条增长方向。请使用ProgressBarDirection定义的常量。默认值：ProgressBarDirection.LEFT_TO_RIGHT。
        * @member egret.gui.ProgressBar#direction
        */
        public direction : string;
        /**
        * 动画实例
        */
        private animator;
        /**
        * 动画播放结束时要到达的value。
        */
        private slideToValue;
        /**
        * 进度条的当前值。
        * 注意：当组件添加到显示列表后，若slideDuration不为0。设置此属性，并不会立即应用。而是作为目标值，开启缓动动画缓慢接近。
        * 若需要立即重置属性，请先设置slideDuration为0，或者把组件从显示列表移除。
        * @member egret.gui.ProgressBar#value
        */
        public value : number;
        private animationValue;
        /**
        * 动画播放更新数值
        */
        private animationUpdateHandler(animation);
        /**
        * @method egret.gui.ProgressBar#setValue
        * @param value {number}
        */
        public setValue(value: number): void;
        /**
        * @method egret.gui.ProgressBar#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
        * @method egret.gui.ProgressBar#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.ProgressBar#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
        private trackResizedOrMoved;
        /**
        * track的位置或尺寸发生改变
        */
        private onTrackResizeOrMove(event);
        /**
        * @method egret.gui.ProgressBar#commitProperties
        */
        public commitProperties(): void;
        /**
        * 更新皮肤部件大小和可见性。
        * @method egret.gui.ProgressBar#updateSkinDisplayList
        */
        public updateSkinDisplayList(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ProgressBarDirection
    * @classdesc
    * 定义进度条控件增长方向的常量
    */
    class ProgressBarDirection {
        /**
        * 水平从左到右增长
        * @constant egret.gui.ProgressBarDirection.LEFT_TO_RIGHT
        */ 
        static LEFT_TO_RIGHT: string;
        /**
        * 水平从右到左增长
        * @constant egret.gui.ProgressBarDirection.RIGHT_TO_LEFT
        */ 
        static RIGHT_TO_LEFT: string;
        /**
        * 竖直从上到下增长
        * @constant egret.gui.ProgressBarDirection.TOP_TO_BOTTOM
        */ 
        static TOP_TO_BOTTOM: string;
        /**
        * 竖直从下到上增长
        * @constant egret.gui.ProgressBarDirection.BOTTOM_TO_TOP
        */ 
        static BOTTOM_TO_TOP: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.HSlider
    * @classdesc
    * 水平滑块控件
    * @extends egret.gui.SliderBase
    */ 
    class HSlider extends SliderBase {
        /**
        * 构造函数
        * @method egret.gui.HSlider#constructor
        */ 
        constructor();
        /**
        * @method egret.gui.HSlider#pointToValue
        * @param x {number}
        * @param y {number}
        * @returns {number}
        */
        public pointToValue(x: number, y: number): number;
        /**
        * @method egret.gui.HSlider#updateSkinDisplayList
        */
        public updateSkinDisplayList(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.VSlider
    * @classdesc
    * 垂直滑块控件
    * @extends egret.gui.SliderBase
    */
    class VSlider extends SliderBase {
        /**
        * 构造函数
        * @method egret.gui.VSlider#constructor
        */ 
        constructor();
        /**
        * @method egret.gui.VSlider#pointToValue
        * @param x {number}
        * @param y {number}
        * @returns {number}
        */
        public pointToValue(x: number, y: number): number;
        /**
        * @method egret.gui.VSlider#updateSkinDisplayList
        */
        public updateSkinDisplayList(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.List
    * @classdesc
    * 列表组件
    * @extends egret.gui.ListBase
    */
    class List extends ListBase {
        /**
        * @method egret.gui.List#constructor
        */
        constructor();
        /**
        * @method egret.gui.List#createChildren
        */
        public createChildren(): void;
        /**
        * 是否使用虚拟布局,默认true
        * @member egret.gui.List#useVirtualLayout
        */ /**
        * @inheritDoc
        */
        public useVirtualLayout : boolean;
        private _allowMultipleSelection;
        /**
        * 是否允许同时选中多项
        * @member egret.gui.List#allowMultipleSelection
        */
        public allowMultipleSelection : boolean;
        private _selectedIndices;
        private _proposedSelectedIndices;
        /**
        * 当前选中的一个或多个项目的索引列表
        * @member egret.gui.List#selectedIndices
        */ 
        public selectedIndices : number[];
        /**
        * @member egret.gui.List#selectedIndex
        */
        public selectedIndex : number;
        /**
        * 当前选中的一个或多个项目的数据源列表
        * @member egret.gui.List#selectedItems
        */ 
        public selectedItems : Object[];
        /**
        * 设置多个选中项
        */
        public _setSelectedIndices(value: number[], dispatchChangeEvent?: boolean): void;
        /**
        * @method egret.gui.List#commitProperties
        */
        public commitProperties(): void;
        /**
        * @method egret.gui.List#commitSelection
        * @param dispatchChangedEvents {boolean}
        * @returns {boolean}
        */
        public commitSelection(dispatchChangedEvents?: boolean): boolean;
        /**
        * 是否是有效的索引
        */
        private isValidIndex(item, index, v);
        /**
        * 提交多项选中项属性
        * @method egret.gui.List#commitMultipleSelection
        */
        public commitMultipleSelection(): void;
        public _isItemIndexSelected(index: number): boolean;
        /**
        * @method egret.gui.List#dataGroup_rendererAddHandler
        * @param event {RendererExistenceEvent}
        */
        public dataGroup_rendererAddHandler(event: RendererExistenceEvent): void;
        /**
        * @method egret.gui.List#dataGroup_rendererRemoveHandler
        * @param event {RendererExistenceEvent}
        */
        public dataGroup_rendererRemoveHandler(event: RendererExistenceEvent): void;
        /**
        * 是否捕获ItemRenderer以便在MouseUp时抛出ItemClick事件
        */
        public _captureItemRenderer: boolean;
        private mouseDownItemRenderer;
        /**
        * 鼠标在项呈示器上按下
        * @method egret.gui.List#item_mouseDownHandler
        * @param event {TouchEvent}
        */
        public item_mouseDownHandler(event: TouchEvent): void;
        /**
        * 计算当前的选中项列表
        */
        private calculateSelectedIndices(index, shiftKey, ctrlKey);
        /**
        * 鼠标在项呈示器上弹起，抛出ItemClick事件。
        */ 
        private item_mouseUpHandler(event);
        /**
        * 鼠标在舞台上弹起
        */ 
        private stage_mouseUpHandler(event);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.PopUpAnchor
    * @classdesc
    * PopUpAnchor组件用于定位布局中的弹出控件或下拉控件
    * @extends egret.gui.UIComponent
    */ 
    class PopUpAnchor extends UIComponent {
        /**
        * 构造函数
        * @method egret.gui.PopUpAnchor#constructor
        */ 
        constructor();
        /**
        * popUp已经弹出的标志
        */ 
        private popUpIsDisplayed;
        /**
        * 自身已经添加到舞台标志
        */ 
        private addedToStage;
        private _popUpHeightMatchesAnchorHeight;
        /**
        * 如果为 true，则将popUp控件的高度设置为 PopUpAnchor的高度值。
        * @member egret.gui.PopUpAnchor#popUpHeightMatchesAnchorHeight
        */
        public popUpHeightMatchesAnchorHeight : boolean;
        private _popUpWidthMatchesAnchorWidth;
        /**
        * 如果为true，则将popUp控件的宽度设置为PopUpAnchor的宽度值。
        * @member egret.gui.PopUpAnchor#popUpWidthMatchesAnchorWidth
        */ 
        public popUpWidthMatchesAnchorWidth : boolean;
        private _displayPopUp;
        /**
        * 如果为 true，则将popUp对象弹出。若为false，关闭弹出的popUp。
        * @member egret.gui.PopUpAnchor#displayPopUp
        */ 
        public displayPopUp : boolean;
        private _popUp;
        /**
        * 要弹出或移除的目标显示对象。
        * @member egret.gui.PopUpAnchor#popUp
        */ 
        public popUp : IVisualElement;
        private _popUpPosition;
        /**
        * popUp相对于PopUpAnchor的弹出位置。请使用PopUpPosition里定义的常量。默认值TOP_LEFT。
        * @see org.flexlite.domUI.core.PopUpPosition
        * @member egret.gui.PopUpAnchor#popUpPosition
        */ 
        public popUpPosition : string;
        /**
        * @method egret.gui.PopUpAnchor#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
        * 手动刷新popUp的弹出位置和尺寸。
        * @method egret.gui.PopUpAnchor#updatePopUpTransform
        */ 
        public updatePopUpTransform(): void;
        /**
        * 计算popUp的弹出位置
        */ 
        private calculatePopUpPosition();
        /**
        * 正在播放动画的标志
        */ 
        private inAnimation;
        /**
        * 动画类实例
        */
        private animator;
        private _openDuration;
        /**
        * 窗口弹出的动画时间(以毫秒为单位)，设置为0则直接弹出窗口而不播放动画效果。默认值250。
        * @member egret.gui.PopUpAnchor#openDuration
        */
        public openDuration : number;
        private _closeDuration;
        /**
        * 窗口关闭的动画时间(以毫秒为单位)，设置为0则直接关闭窗口而不播放动画效果。默认值150。
        * @member egret.gui.PopUpAnchor#closeDuration
        */
        public closeDuration : number;
        /**
        * 动画开始播放触发的函数
        */ 
        private animationStartHandler(animation);
        /**
        * 动画播放过程中触发的更新数值函数
        */ 
        private animationUpdateHandler(animation);
        /**
        * 动画播放完成触发的函数
        */ 
        private animationEndHandler(animation);
        /**
        * 添加或移除popUp
        */ 
        private addOrRemovePopUp();
        /**
        * 移除并重置popUp
        */ 
        private removeAndResetPopUp();
        /**
        * 对popUp应用尺寸和位置调整
        */ 
        private applyPopUpTransform(unscaledWidth, unscaledHeight);
        /**
        * 开始播放动画
        */ 
        private startAnimation();
        private valueRange;
        /**
        * 创建动画轨迹
        */ 
        private createMotionPath();
        /**
        * 添加到舞台事件
        */ 
        private addedToStageHandler(event);
        /**
        * 延迟检查弹出状态，防止堆栈溢出。
        */ 
        private checkPopUpState();
        /**
        * 从舞台移除事件
        */ 
        private removedFromStageHandler(event);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.DropDownController
    * @classdesc
    * 用于处理因用户交互而打开和关闭下拉列表的操作的控制器
    * @extends egret.EventDispatcher
    */ 
    class DropDownController extends EventDispatcher {
        /**
        * 构造函数
        * @method egret.gui.DropDownController#constructor
        */ 
        constructor();
        /**
        * 鼠标按下标志
        */ 
        private mouseIsDown;
        private _openButton;
        /**
        * 下拉按钮实例
        * @member egret.gui.DropDownController#openButton
        */ 
        public openButton : ButtonBase;
        /**
        * 要考虑作为下拉列表的点击区域的一部分的显示对象列表。
        * 在包含项列出的任何组件内进行鼠标单击不会自动关闭下拉列表。
        * @member egret.gui.DropDownController#hitAreaAdditions
        */ 
        public hitAreaAdditions: DisplayObject[];
        private _dropDown;
        /**
        * 下拉区域显示对象
        * @member egret.gui.DropDownController#dropDown
        */ 
        public dropDown : DisplayObject;
        private _isOpen;
        /**
        * 下拉列表已经打开的标志
        * @member egret.gui.DropDownController#isOpen
        */ 
        public isOpen : boolean;
        private _closeOnResize;
        /**
        * 如果为 true，则在调整舞台大小时会关闭下拉列表。
        * @member egret.gui.DropDownController#closeOnResize
        */ 
        public closeOnResize : boolean;
        private _rollOverOpenDelay;
        private rollOverOpenDelayTimer;
        /**
        * 指定滑过锚点按钮时打开下拉列表要等待的延迟（以毫秒为单位）。
        * 如果设置为 NaN，则下拉列表会在单击时打开，而不是在滑过时打开。默认值NaN
        * @member egret.gui.DropDownController#rollOverOpenDelay
        */ 
        public rollOverOpenDelay : number;
        /**
        * 添加触发下拉列表打开的事件监听
        */ 
        private addOpenTriggers();
        /**
        * 移除触发下拉列表打开的事件监听
        */ 
        private removeOpenTriggers();
        /**
        * 添加触发下拉列表关闭的事件监听
        */ 
        private addCloseTriggers();
        /**
        * 移除触发下拉列表关闭的事件监听
        */ 
        private removeCloseTriggers();
        /**
        * 添加舞台尺寸改变的事件监听
        */ 
        private addCloseOnResizeTrigger();
        /**
        * 移除舞台尺寸改变的事件监听
        */
        private removeCloseOnResizeTrigger();
        /**
        * 检查鼠标是否在DropDown或者openButton区域内。
        */ 
        private isTargetOverDropDownOrOpenButton(target);
        /**
        * 打开下拉列表
        * @method egret.gui.DropDownController#openDropDown
        */ 
        public openDropDown(): void;
        /**
        * 执行打开下拉列表
        */ 
        private openDropDownHelper();
        /**
        * 关闭下拉列表
        * @method egret.gui.DropDownController#closeDropDown
        * @param commit {boolean}
        */ 
        public closeDropDown(commit: boolean): void;
        /**
        * openButton上按下鼠标事件
        * @method egret.gui.DropDownController#_openButton_buttonDownHandler
        * @param event {Event}
        */ 
        public _openButton_buttonDownHandler(event: Event): void;
        /**
        * openButton上鼠标经过事件
        * @method egret.gui.DropDownController#_openButton_rollOverHandler
        * @param event {TouchEvent}
        */ 
        public _openButton_rollOverHandler(event: TouchEvent): void;
        /**
        * openButton上鼠标移出事件
        */ 
        private openButton_rollOutHandler(event);
        /**
        * 到达鼠标移入等待延迟打开的时间。
        */ 
        private rollOverDelay_timerCompleteHandler(event);
        /**
        * 舞台上鼠标按下事件
        * @method egret.gui.DropDownController#stage_mouseDownHandler
        * @param event {Event}
        */ 
        public stage_mouseDownHandler(event: Event): void;
        /**
        * 舞台上鼠标移动事件
        * @method egret.gui.DropDownController#stage_mouseMoveHandler
        * @param event {Event}
        */ 
        public stage_mouseMoveHandler(event: Event): void;
        /**
        * 舞台上鼠标弹起事件
        * @method egret.gui.DropDownController#stage_mouseUpHandler_noRollOverOpenDelay
        * @param event {Event}
        */ 
        public stage_mouseUpHandler_noRollOverOpenDelay(event: Event): void;
        /**
        * 舞台上鼠标弹起事件
        * @method egret.gui.DropDownController#stage_mouseUpHandler
        * @param event {Event}
        */ 
        public stage_mouseUpHandler(event: Event): void;
        /**
        * 舞台尺寸改变事件
        * @method egret.gui.DropDownController#stage_resizeHandler
        * @param event {Event}
        */ 
        public stage_resizeHandler(event: Event): void;
        /**
        * 舞台上鼠标滚轮事件
        */ 
        private stage_mouseWheelHandler(event);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.DropDownListBase
    * @classdesc
    * 下拉列表控件基类
    * @extends egret.gui.List
    */ 
    class DropDownListBase extends List {
        /**
        * 构造函数
        * @method egret.gui.DropDownListBase#constructor
        */ 
        constructor();
        /**
        * [SkinPart]下拉区域显示对象
        * @member egret.gui.DropDownListBase#dropDown
        */ 
        public dropDown: DisplayObject;
        /**
        * [SkinPart]下拉触发按钮
        * @member egret.gui.DropDownListBase#openButton
        */ 
        public openButton: ButtonBase;
        /**
        * @constant egret.gui.DropDownListBase.PAGE_SIZE
        */
        static PAGE_SIZE: number;
        /**
        * 文本改变标志
        */ 
        public _labelChanged: boolean;
        /**
        * @inheritDoc
        */
        public _setDataProvider(value: ICollection): void;
        /**
        * @inheritDoc
        */
        public _setLabelField(value: string): void;
        /**
        * @inheritDoc
        */
        public _setLabelFunction(value: Function): void;
        private _dropDownController;
        /**
        * 下拉控制器
        * @member egret.gui.DropDownListBase#dropDownController
        */ 
        public dropDownController : DropDownController;
        /**
        * 下拉列表是否已经已打开
        * @member egret.gui.DropDownListBase#isDropDownOpen
        */ 
        public isDropDownOpen : boolean;
        private _userProposedSelectedIndex;
        /**
        * @method egret.gui.DropDownListBase#commitProperties
        */
        public commitProperties(): void;
        /**
        * @method egret.gui.DropDownListBase#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.DropDownListBase#partRemoved
        * @param partName {string}
        * @param instance {any}
        */
        public partRemoved(partName: string, instance: any): void;
        /**
        * @method egret.gui.DropDownListBase#getCurrentSkinState
        * @returns {string}
        */
        public getCurrentSkinState(): string;
        /**
        * @method egret.gui.DropDownListBase#commitSelection
        * @param dispatchChangedEvents {boolean}
        * @returns {boolean}
        */
        public commitSelection(dispatchChangedEvents?: boolean): boolean;
        /**
        * @method egret.gui.DropDownListBase#_isItemIndexSelected
        * @param index {number}
        * @returns {boolean}
        */
        public _isItemIndexSelected(index: number): boolean;
        /**
        * 打开下拉列表并抛出UIEvent.OPEN事件。
        * @method egret.gui.DropDownListBase#openDropDown
        */ 
        public openDropDown(): void;
        /**
        * 关闭下拉列表并抛出UIEvent.CLOSE事件。
        * @method egret.gui.DropDownListBase#closeDropDown
        * @param commit {boolean}
        */ 
        public closeDropDown(commit: boolean): void;
        /**
        * 更新选中项的提示文本
        * @method egret.gui.DropDownListBase#updateLabelDisplay
        * @param displayItem {any}
        */ 
        public updateLabelDisplay(displayItem?: any): void;
        /**
        * 改变高亮的选中项
        * @method egret.gui.DropDownListBase#_changeHighlightedSelection
        * @param newIndex {number}
        * @param scrollToTop {boolean}
        */ 
        public _changeHighlightedSelection(newIndex: number, scrollToTop?: boolean): void;
        /**
        * @method egret.gui.DropDownListBase#dataProvider_collectionChangeHandler
        * @param event {CollectionEvent}
        */
        public dataProvider_collectionChangeHandler(event: CollectionEvent): void;
        /**
        * @method egret.gui.DropDownListBase#item_mouseDownHandler
        * @param event {TouchEvent}
        */
        public item_mouseDownHandler(event: TouchEvent): void;
        /**
        * 控制器抛出打开列表事件
        * @method egret.gui.DropDownListBase#_dropDownController_openHandler
        * @param event {UIEvent}
        */ 
        public _dropDownController_openHandler(event: UIEvent): void;
        /**
        * 打开列表后组件一次失效验证全部完成
        * @method egret.gui.DropDownListBase#_open_updateCompleteHandler
        * @param event {UIEvent}
        */ 
        public _open_updateCompleteHandler(event: UIEvent): void;
        /**
        * 控制器抛出关闭列表事件
        * @method egret.gui.DropDownListBase#dropDownController_closeHandler
        * @param event {UIEvent}
        */ 
        public dropDownController_closeHandler(event: UIEvent): void;
        /**
        * 关闭列表后组件一次失效验证全部完成
        */ 
        private close_updateCompleteHandler(event);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Tree
    * @classdesc
    * 树状列表组件
    * @extends egret.gui.List
    */
    class Tree extends List {
        /**
        * 构造函数
        * @method egret.gui.Tree#constructor
        */ 
        constructor();
        static defaultTreeRendererFactory: ClassFactory;
        /**
        * @method egret.gui.Tree#createChildren
        */
        public createChildren(): void;
        /**
        * @method egret.gui.Tree#updateRenderer
        * @param renderer {IItemRenderer}
        * @param itemIndex {number}
        * @param data {any}
        * @returns {IItemRenderer}
        */
        public updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
        * 根据数据项返回项呈示器中图标的skinName属性值
        * @method egret.gui.Tree#itemToIcon
        * @param data {any}
        * @returns {any}
        */ 
        public itemToIcon(data: any): any;
        /**
        * @method egret.gui.Tree#dataGroup_rendererAddHandler
        * @param event {RendererExistenceEvent}
        */
        public dataGroup_rendererAddHandler(event: RendererExistenceEvent): void;
        /**
        * 节点即将打开
        */ 
        private onItemOpening(event);
        /**
        * @method egret.gui.Tree#dataGroup_rendererRemoveHandler
        * @param event {RendererExistenceEvent}
        */
        public dataGroup_rendererRemoveHandler(event: RendererExistenceEvent): void;
        /**
        * 图标字段或函数改变标志
        */ 
        private iconFieldOrFunctionChanged;
        private _iconField;
        /**
        * 数据项中用来确定图标skinName属性值的字段名称。另请参考UIAsset.skinName。
        * 若设置了iconFunction，则设置此属性无效。
        * @member egret.gui.Tree#iconField
        */ 
        public iconField : string;
        private _iconFunction;
        /**
        * 用户提供的函数，在每个数据项目上运行以确定其图标的skinName值。另请参考UIAsset.skinName。
        * 示例：iconFunction(item:Object):Object
        * @member egret.gui.Tree#iconFunction
        */ 
        public iconFunction : Function;
        /**
        * 打开或关闭一个节点,注意，此操作不会抛出open或close事件。
        * @method egret.gui.Tree#expandItem
        * @param item {any} 要打开或关闭的节点
        * @param open {boolean} true表示打开节点，反之关闭。
        */ 
        public expandItem(item: any, open?: boolean): void;
        /**
        * 指定的节点是否打开
        * @method egret.gui.Tree#isItemOpen
        * @param item {any}
        * @returns {boolean}
        */ 
        public isItemOpen(item: any): boolean;
        /**
        * @method egret.gui.Tree#dataProvider_collectionChangeHandler
        * @param event {CollectionEvent}
        */
        public dataProvider_collectionChangeHandler(event: CollectionEvent): void;
        /**
        * @method egret.gui.Tree#commitProperties
        */
        public commitProperties(): void;
        /**
        * 更新指定索引项的图标
        */ 
        private updateRendererIconProperty(itemIndex);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.DropDownList
    * @classdesc
    * 不可输入的下拉列表控件。带输入功能的下拉列表控件，请使用ComboBox。
    * @see org.flexlite.domUI.components.ComboBox
    * @extends egret.gui.DropDownListBase
    */ 
    class DropDownList extends DropDownListBase {
        /**
        * 构造函数
        * @method egret.gui.DropDownList#constructor
        */ 
        constructor();
        /**
        * [SkinPart]选中项文本
        * @member egret.gui.DropDownList#labelDisplay
        */ 
        public labelDisplay: IDisplayText;
        private _prompt;
        /**
        * 当没有选中项时在DropDownList上要显示的字符串。<p/>
        * 它通常是一个类似于“请选择一项...”的文本。当下拉列表中的某个项目被选中后，会被替换为该选定项目中的文本。
        * @member egret.gui.DropDownList#prompt
        */ 
        public prompt : string;
        /**
        * @method egret.gui.DropDownList#partAdded
        * @param partName {string}
        * @param instance {any}
        */
        public partAdded(partName: string, instance: any): void;
        /**
        * @method egret.gui.DropDownList#updateLabelDisplay
        * @param displayItem {any}
        */
        public updateLabelDisplay(displayItem?: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TabBarButton
    * @classdesc
    * 选项卡组件的按钮条目
    * @extends egret.gui.ToggleButtonBase
    * @implements egret.gui.IItemRenderer
    */ 
    class TabBarButton extends ToggleButtonBase implements IItemRenderer {
        /**
        * @method egret.gui.TabBarButton#constructor
        */
        constructor();
        private _allowDeselection;
        /**
        * 如果为 true，用户单击当前选定的按钮时即会将其取消选择。
        * 如果为 false，用户必须选择不同的按钮才可取消选择当前选定的按钮。
        * @member egret.gui.TabBarButton#allowDeselection
        */ 
        public allowDeselection : boolean;
        private _data;
        /**
        * @member egret.gui.TabBarButton#data
        */
        public data : any;
        private _itemIndex;
        /**
        * @member egret.gui.TabBarButton#itemIndex
        */
        public itemIndex : number;
        /**
        * @inheritDoc
        */
        public _setLabel(value: string): void;
        /**
        * @method egret.gui.TabBarButton#buttonReleased
        */
        public buttonReleased(): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TabBar
    * @classdesc
    * 选项卡组件
    * @extends egret.gui.ListBase
    */ 
    class TabBar extends ListBase {
        /**
        * 构造函数
        * @method egret.gui.TabBar#constructor
        */ 
        constructor();
        /**
        * requireSelection改变标志
        */
        private requireSelectionChanged_tabBar;
        /**
        * @method egret.gui.TabBar#c
        * @param value {boolea}
        */
        public c(value: boolean): void;
        /**
        * @inheritDoc
        */
        public _setDataProvider(value: ICollection): void;
        /**
        * 鼠标点击的选中项改变
        */ 
        private onIndexChanged(event);
        /**
        * ViewStack选中项发生改变
        */ 
        private onViewStackIndexChange(event);
        /**
        * @method egret.gui.TabBar#commitProperties
        */
        public commitProperties(): void;
        /**
        * @method egret.gui.TabBar#dataGroup_rendererAddHandler
        * @param event {RendererExistenceEvent}
        */
        public dataGroup_rendererAddHandler(event: RendererExistenceEvent): void;
        /**
        * @method egret.gui.TabBar#dataGroup_rendererRemoveHandler
        * @param event {RendererExistenceEvent}
        */
        public dataGroup_rendererRemoveHandler(event: RendererExistenceEvent): void;
        /**
        * 鼠标在条目上按下
        */ 
        private item_clickHandler(event);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.Scroller
    * @classdesc
    * 滚动条组件
    * @extends egret.gui.UIComponent
    * @implements egret.gui.IVisualElementContainer
    */ 
    class Scroller extends UIComponent implements IVisualElementContainer {
        /**
        * 构造函数
        * @method egret.gui.Scroller#constructor
        */
        constructor();
        /**
        * @method egret.gui.Scroller#measure
        */
        public measure(): void;
        /**
        * @method egret.gui.Scroller#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        private _verticalScrollPolicy;
        /**
        * 垂直滚动条显示策略，参见ScrollPolicy类定义的常量。
        * @member egret.gui.Scroller#verticalScrollPolicy
        */
        public verticalScrollPolicy : string;
        private _horizontalScrollPolicy;
        /**
        * 水平滚动条显示策略，参见ScrollPolicy类定义的常量。
        * @member egret.gui.Scroller#horizontalScrollPolicy
        */
        public horizontalScrollPolicy : string;
        private _viewport;
        /**
        * 要滚动的视域组件。
        * @member egret.gui.Scroller#viewport
        */
        public viewport : IViewport;
        /**
        * 安装并初始化视域组件
        */
        private installViewport();
        /**
        * 卸载视域组件
        */
        private uninstallViewport();
        private touchEndTimer;
        private delayTouchEndEvent;
        private onTouchEndCapture(event);
        private onTouchEndTimer(e);
        private dispatchPropagationEvent(event);
        private touchBeginTimer;
        private delayTouchBeginEvent;
        /**
        * 若这个Scroller可以滚动，阻止当前事件，延迟100ms再抛出。
        */
        private onTouchBeginCapture(event);
        private cloneTouchEvent(event);
        private onTouchBeginTimer(e?);
        /**
        * 鼠标按下时的偏移量
        */
        private _offsetPointX;
        private _offsetPointY;
        private _horizontalCanScroll;
        private _verticalCanScroll;
        /**
        * 检查当前滚动策略，若有一个方向可以滚动，返回true。
        */
        private checkScrollPolicy();
        private ignoreTouchBegin;
        private onTouchBegin(event);
        private onTouchMove(event);
        private onTouchEnd(event);
        private static VELOCITY_WEIGHTS;
        private static easeOut(ratio);
        private _previousTouchTime;
        private _velocityX;
        private _velocityY;
        private _previousVelocityX;
        private _previousVelocityY;
        private _currentTouchX;
        private _currentTouchY;
        private _previousTouchX;
        private _previousTouchY;
        public _startTouchX: number;
        public _startTouchY: number;
        public _startHorizontalScrollPosition: number;
        public _startVerticalScrollPosition: number;
        private enterFrameHandler(event);
        private checkHorizontalScrollPosition();
        private checkVerticalScrollPosition();
        private static animationData;
        private getAnimationDatas(pixelsPerMS, curPos, maxPos);
        /**
        * 停止触摸时继续滚动的动画实例
        */
        private horizontalAnimator;
        private finishScrollingHorizontally(animation?);
        /**
        * 缓动到水平滚动位置
        * @method egret.gui.Scroller#throwHorizontally
        * @param hspTo {number}
        * @param duration {number}
        */
        public throwHorizontally(hspTo: number, duration?: number): void;
        /**
        * 更新水平滚动位置
        */
        private horizontalUpdateHandler(animation);
        /**
        * 滚动回正确位置的动画实例
        */
        private verticalAnimator;
        private finishScrollingVertically(animation?);
        /**
        * 缓动到垂直滚动位置
        * @method egret.gui.Scroller#throwVertically
        * @param vspTo {number}
        * @param duration {number}
        */
        public throwVertically(vspTo: number, duration?: number): void;
        /**
        * 更新垂直滚动位置
        */
        private verticalUpdateHandler(animation);
        /**
        * @member egret.gui.Scroller#numElements
        */
        public numElements : number;
        /**
        * 抛出索引越界异常
        */
        private throwRangeError(index);
        /**
        * @method egret.gui.Scroller#getElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public getElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.Scroller#getElementIndex
        * @param element {IVisualElement}
        * @returns {number}
        */
        public getElementIndex(element: IVisualElement): number;
        /**
        * @method egret.gui.Scroller#containsElement
        * @param element {IVisualElement}
        * @returns {boolean}
        */
        public containsElement(element: IVisualElement): boolean;
        private throwNotSupportedError();
        /**
        * @method egret.gui.Scroller#addElement
        * @deprecated
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public addElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.Scroller#addElementAt
        * @deprecated
        * @param element {IVisualElement}
        * @param index {number}
        * @returns {IVisualElement}
        */
        public addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
        * @method egret.gui.Scroller#removeElement
        * @deprecated
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public removeElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.Scroller#removeElementAt
        * @deprecated
        * @param index {number}
        * @returns {IVisualElement}
        */
        public removeElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.Scroller#removeAllElements
        * @deprecated
        */
        public removeAllElements(): void;
        /**
        * @method egret.gui.Scroller#setElementIndex
        * @deprecated
        * @param element {IVisualElement}
        * @param index {number}
        */
        public setElementIndex(element: IVisualElement, index: number): void;
        /**
        * @method egret.gui.Scroller#swapElements
        * @deprecated
        * @param element1 {IVisualElement}
        * @param element2 {IVisualElement}
        */
        public swapElements(element1: IVisualElement, element2: IVisualElement): void;
        /**
        * @method egret.gui.Scroller#swapElementsAt
        * @deprecated
        * @param index1 {number}
        * @param index2 {number}
        */
        public swapElementsAt(index1: number, index2: number): void;
        /**
        * @method egret.gui.Scroller#addChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */
        public addChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.Scroller#addChildAt
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        * @returns {DisplayObject}
        */
        public addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
        * @method egret.gui.Scroller#removeChild
        * @deprecated
        * @param child {DisplayObject}
        * @returns {DisplayObject}
        */
        public removeChild(child: DisplayObject): DisplayObject;
        /**
        * @method egret.gui.Scroller#removeChildAt
        * @deprecated
        * @param index {number}
        * @returns {DisplayObject}
        */
        public removeChildAt(index: number): DisplayObject;
        /**
        * @method egret.gui.Scroller#setChildIndex
        * @deprecated
        * @param child {DisplayObject}
        * @param index {number}
        */
        public setChildIndex(child: DisplayObject, index: number): void;
        /**
        * @method egret.gui.Scroller#swapChildren
        * @deprecated
        * @param child1 {DisplayObject}
        * @param child2 {DisplayObject}
        */
        public swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
        * @method egret.gui.Scroller#swapChildrenAt
        * @deprecated
        * @param index1 {number}
        * @param index2 {number}
        */
        public swapChildrenAt(index1: number, index2: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.UIEvent
    * @classdesc
    * UI事件
    * @extends egret.Event
    */
    class UIEvent extends Event {
        /**
        * @method egret.gui.UIEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
        * 组件初始化开始
        * @constant egret.gui.UIEvent.INITIALIZE
        */ 
        static INITIALIZE: string;
        /**
        * 组件创建完成
        * @constant egret.gui.UIEvent.CREATION_COMPLETE
        */ 
        static CREATION_COMPLETE: string;
        /**
        * 组件的一次三个延迟验证渲染阶段全部完成
        * @constant egret.gui.UIEvent.UPDATE_COMPLETE
        */ 
        static UPDATE_COMPLETE: string;
        /**
        * 当用户按下ButtonBase控件时分派。如果 autoRepeat属性为 true，则只要按钮处于按下状态，就将重复分派此事件。
        * @constant egret.gui.UIEvent.BUTTON_DOWN
        */ 
        static BUTTON_DOWN: string;
        /**
        * 改变结束
        * @constant egret.gui.UIEvent.CHANGE_END
        */ 
        static CHANGE_END: string;
        /**
        * 改变开始
        * @constant egret.gui.UIEvent.CHANGE_START
        */ 
        static CHANGE_START: string;
        /**
        * 正在改变中
        * @constant egret.gui.UIEvent.CHANGING
        */ 
        static CHANGING: string;
        /**
        * 值发生改变
        * @constant egret.gui.UIEvent.VALUE_COMMIT
        */ 
        static VALUE_COMMIT: string;
        /**
        * SkinnableComponent皮肤发生改变
        * @constant egret.gui.UIEvent.SKIN_CHANGED
        */ 
        static SKIN_CHANGED: string;
        /**
        * UIAsset的content属性解析完成
        * @constant egret.gui.UIEvent.CONTENT_CHANGED
        */
        static CONTENT_CHANGED: string;
        /**
        * 下拉框弹出事件
        * @constant egret.gui.UIEvent.OPEN
        */ 
        static OPEN: string;
        /**
        * 下拉框关闭事件
        * @constant egret.gui.UIEvent.CLOSE
        */ 
        static CLOSE: string;
        /**
        * UIMoveClip一次播放完成事件。仅当UIMovieClip.totalFrames>1时会抛出此事件。
        * @constant egret.gui.UIEvent.PLAY_COMPLETE
        */ 
        static PLAY_COMPLETE: string;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.UIEvent.dispatchUIEvent
        */
        static dispatchUIEvent(target: IEventDispatcher, type: string): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.PropertyChangeEvent
    * @classdesc
    * 对象的一个属性发生更改时传递到事件侦听器的事件
    * @extends egret.Event
    */
    class PropertyChangeEvent extends Event {
        /**
        * 属性改变
        * @constant egret.gui.PropertyChangeEvent.PROPERTY_CHANGE
        */ 
        static PROPERTY_CHANGE: string;
        /**
        * 构造函数
        * @method egret.gui.PropertyChangeEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param kind {string}
        * @param property {any}
        * @param oldValue {any}
        * @param newValue {any}
        * @param source {any}
        */ 
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, kind?: string, property?: any, oldValue?: any, newValue?: any, source?: any);
        /**
        * 指定更改的类型。可能的值为 PropertyChangeEventKind.UPDATE、PropertyChangeEventKind.DELETE 和 null。
        * @member egret.gui.PropertyChangeEvent#kind
        */ 
        public kind: string;
        /**
        * 更改后的属性的值。
        * @member egret.gui.PropertyChangeEvent#newValue
        */ 
        public newValue: any;
        /**
        * 更改后的属性的值。
        * @member egret.gui.PropertyChangeEvent#oldValue
        */
        public oldValue: any;
        /**
        * 指定已更改属性的 String、QName 或 int。
        * @member egret.gui.PropertyChangeEvent#property
        */
        public property: any;
        /**
        * 发生更改的对象。
        * @member egret.gui.PropertyChangeEvent#source
        */ 
        public source: any;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.PropertyChangeEvent.dispatchPropertyChangeEvent
        */
        static dispatchPropertyChangeEvent(target: IEventDispatcher, kind?: string, property?: any, oldValue?: any, newValue?: any, source?: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.PropertyChangeEventKind
    * @classdesc
    * PropertyChangeEventKind 类定义 PropertyChangeEvent 类的 kind 属性的常量值。
    */
    class PropertyChangeEventKind {
        /**
        * 指示该属性的值已更改。
        * @constant egret.gui.PropertyChangeEventKind.UPDATE
        */ 
        static UPDATE: string;
        /**
        * 指示该属性已从此对象中删除。
        * @constant egret.gui.PropertyChangeEventKind.DELETE
        */
        static DELETE: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.MoveEvent
    * @classdesc
    * 移动事件
    * @extends egret.Event
    */
    class MoveEvent extends Event {
        /**
        * @constant egret.gui.MoveEvent.MOVE
        */
        static MOVE: string;
        /**
        * @method egret.gui.MoveEvent#constructor
        * @param type {string}
        * @param oldX {number}
        * @param oldY {number}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        */
        constructor(type: string, oldX?: number, oldY?: number, bubbles?: boolean, cancelable?: boolean);
        /**
        * 旧的组件X
        * @member egret.gui.MoveEvent#oldX
        */
        public oldX: number;
        /**
        * 旧的组件Y
        * @member egret.gui.MoveEvent#oldY
        */
        public oldY: number;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.MoveEvent.dispatchMoveEvent
        */
        static dispatchMoveEvent(target: IEventDispatcher, oldX?: number, oldY?: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ResizeEvent
    * @classdesc
    * 尺寸改变事件
    * @extends egret.Event
    */
    class ResizeEvent extends Event {
        /**
        * @constant egret.gui.ResizeEvent.RESIZE
        */
        static RESIZE: string;
        /**
        * @method egret.gui.ResizeEvent#constructor
        * @param type {string}
        * @param oldWidth {number}
        * @param oldHeight {number}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        */
        constructor(type: string, oldWidth?: number, oldHeight?: number, bubbles?: boolean, cancelable?: boolean);
        /**
        * 旧的高度
        * @member egret.gui.ResizeEvent#oldHeight
        */
        public oldHeight: number;
        /**
        * 旧的宽度
        * @member egret.gui.ResizeEvent#oldWidth
        */
        public oldWidth: number;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.ResizeEvent.dispatchResizeEvent
        */
        static dispatchResizeEvent(target: IEventDispatcher, oldWidth?: number, oldHeight?: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.SkinPartEvent
    * @classdesc
    * 皮肤组件附加移除事件
    * @extends egret.Event
    */
    class SkinPartEvent extends Event {
        /**
        * 附加皮肤公共子部件
        * @constant egret.gui.SkinPartEvent.PART_ADDED
        */ 
        static PART_ADDED: string;
        /**
        * 移除皮肤公共子部件
        * @constant egret.gui.SkinPartEvent.PART_REMOVED
        */ 
        static PART_REMOVED: string;
        /**
        * @method egret.gui.SkinPartEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param partName {string}
        * @param instance {any}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, partName?: string, instance?: any);
        /**
        * 被添加或移除的皮肤组件实例
        * @member egret.gui.SkinPartEvent#instance
        */ 
        public instance: any;
        /**
        * 被添加或移除的皮肤组件的实例名
        * @member egret.gui.SkinPartEvent#partName
        */ 
        public partName: string;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.SkinPartEvent.dispatchSkinPartEvent
        */
        static dispatchSkinPartEvent(target: IEventDispatcher, type: string, partName?: string, instance?: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.CloseEvent
    * @classdesc
    * 窗口关闭事件
    * @extends egret.Event
    */ 
    class CloseEvent extends Event {
        /**
        * @constant egret.gui.CloseEvent.CLOSE
        */
        static CLOSE: string;
        /**
        * 构造函数
        * @method egret.gui.CloseEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param detail {any}
        */ 
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, detail?: any);
        /**
        * 触发关闭事件的细节。某些窗口组件用此属性来区分窗口中被点击的按钮。
        * @member egret.gui.CloseEvent#detail
        */ 
        public detail: any;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.CloseEvent.dispatchCloseEvent
        */
        static dispatchCloseEvent(target: IEventDispatcher, type: string, detail?: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.CollectionEvent
    * @classdesc
    * 集合类型数据改变事件
    * @extends egret.Event
    */
    class CollectionEvent extends Event {
        /**
        * 集合类数据发生改变
        * @constant egret.gui.CollectionEvent.COLLECTION_CHANGE
        */
        static COLLECTION_CHANGE: string;
        /**
        * @method egret.gui.CollectionEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param kind {string}
        * @param location {number}
        * @param oldLocation {number}
        * @param items {Array<any>}
        * @param oldItems {Array<any>}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, kind?: string, location?: number, oldLocation?: number, items?: any[], oldItems?: any[]);
        /**
        * 指示发生的事件类型。此属性值可以是 CollectionEventKind 类中的一个值，也可以是 null，用于指示类型未知。
        * @member egret.gui.CollectionEvent#kind
        */
        public kind: string;
        /**
        * 受事件影响的项目的列表
        * @member egret.gui.CollectionEvent#items
        */
        public items: any[];
        /**
        * 仅当kind的值为CollectionEventKind.REPLACE时，表示替换前的项目列表
        * @member egret.gui.CollectionEvent#oldItems
        */
        public oldItems: any[];
        /**
        * 如果 kind 值为 CollectionEventKind.ADD、 CollectionEventKind.MOVE、
        * CollectionEventKind.REMOVE 或 CollectionEventKind.REPLACE，
        * CollectionEventKind.UPDATE
        * 则此属性为 items 属性中指定的项目集合中零号元素的的索引。
        * @member egret.gui.CollectionEvent#location
        */
        public location: number;
        /**
        * 如果 kind 的值为 CollectionEventKind.MOVE，
        * 则此属性为 items 属性中指定的项目在目标集合中原来位置的从零开始的索引。
        * @member egret.gui.CollectionEvent#oldLocation
        */
        public oldLocation: number;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.CollectionEvent.dispatchCollectionEvent
        */
        static dispatchCollectionEvent(target: IEventDispatcher, type: string, kind?: string, location?: number, oldLocation?: number, items?: any[], oldItems?: any[]): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.CollectionEventKind
    * @classdesc
    * 定义  CollectionEvent 类 kind 属性的有效值的常量。
    * 这些常量指示对集合进行的更改类型。
    */
    class CollectionEventKind {
        /**
        * 指示集合添加了一个或多个项目。
        * @constant egret.gui.CollectionEventKind.ADD
        */ 
        static ADD: string;
        /**
        * 指示项目已从 CollectionEvent.oldLocation确定的位置移动到 location确定的位置。
        * @constant egret.gui.CollectionEventKind.MOVE
        */ 
        static MOVE: string;
        /**
        * 指示集合应用了排序或/和筛选。
        * @constant egret.gui.CollectionEventKind.REFRESH
        */ 
        static REFRESH: string;
        /**
        * 指示集合删除了一个或多个项目。
        * @constant egret.gui.CollectionEventKind.REMOVE
        */ 
        static REMOVE: string;
        /**
        * 指示已替换由 CollectionEvent.location 属性确定的位置处的项目。
        * @constant egret.gui.CollectionEventKind.REPLACE
        */ 
        static REPLACE: string;
        /**
        * 指示集合已彻底更改，需要进行重置。
        * @constant egret.gui.CollectionEventKind.RESET
        */ 
        static RESET: string;
        /**
        * 指示集合中一个或多个项目进行了更新。受影响的项目将存储在  CollectionEvent.items 属性中。
        * @constant egret.gui.CollectionEventKind.UPDATE
        */ 
        static UPDATE: string;
        /**
        * 指示集合中某个节点的子项列表已打开，通常应用于Tree的数据源XMLCollection。
        * @constant egret.gui.CollectionEventKind.OPEN
        */ 
        static OPEN: string;
        /**
        * 指示集合中某个节点的子项列表已关闭，通常应用于Tree的数据源XMLCollection。
        * @constant egret.gui.CollectionEventKind.CLOSE
        */ 
        static CLOSE: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ElementExistenceEvent
    * @classdesc
    * Group添加或移除元素时分派的事件。
    * @extends egret.Event
    */ 
    class ElementExistenceEvent extends Event {
        /**
        * 元素添加
        * @constant egret.gui.ElementExistenceEvent.ELEMENT_ADD
        */ 
        static ELEMENT_ADD: string;
        /**
        * 元素移除
        * @constant egret.gui.ElementExistenceEvent.ELEMENT_REMOVE
        */ 
        static ELEMENT_REMOVE: string;
        /**
        * @member egret.gui.ElementExistenceEvent#constructor
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, element?: IVisualElement, index?: number);
        /**
        * 指向已添加或删除元素的位置的索引。
        * @member egret.gui.ElementExistenceEvent#index
        */ 
        public index: number;
        /**
        * 对已添加或删除的视觉元素的引用。
        * @member egret.gui.ElementExistenceEvent#element
        */ 
        public element: IVisualElement;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.ElementExistenceEvent.dispatchElementExistenceEvent
        */
        static dispatchElementExistenceEvent(target: IEventDispatcher, type: string, element?: IVisualElement, index?: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.IndexChangeEvent
    * @classdesc
    * 索引改变事件
    * @extends egret.Event
    */ 
    class IndexChangeEvent extends Event {
        /**
        * 指示索引已更改
        * @constant egret.gui.IndexChangeEvent.CHANGE
        */ 
        static CHANGE: string;
        /**
        * 指示索引即将更改,可以通过调用preventDefault()方法阻止索引发生更改
        * @constant egret.gui.IndexChangeEvent.CHANGING
        */
        static CHANGING: string;
        /**
        * @method egret.gui.IndexChangeEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param oldIndex {number}
        * @param newIndex {number}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, oldIndex?: number, newIndex?: number);
        /**
        * 进行更改之后的从零开始的索引。
        * @member egret.gui.IndexChangeEvent#newIndex
        */
        public newIndex: number;
        /**
        * 进行更改之前的从零开始的索引。
        * @member egret.gui.IndexChangeEvent#oldIndex
        */ 
        public oldIndex: number;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.IndexChangeEvent.dispatchIndexChangeEvent
        */
        static dispatchIndexChangeEvent(target: IEventDispatcher, type: string, oldIndex?: number, newIndex?: number, cancelable?: boolean): boolean;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ListEvent
    * @classdesc
    * 列表事件
    * @extends egret.TouchEvent
    */ 
    class ListEvent extends TouchEvent {
        /**
        * 指示用户执行了将鼠标指针从控件中某个项呈示器上移开的操作
        * @constant egret.gui.ListEvent.ITEM_ROLL_OUT
        */ 
        static ITEM_ROLL_OUT: string;
        /**
        * 指示用户执行了将鼠标指针滑过控件中某个项呈示器的操作。
        * @constant egret.gui.ListEvent.ITEM_ROLL_OVER
        */
        static ITEM_ROLL_OVER: string;
        /**
        * 指示用户执行了将鼠标在某个项呈示器上单击的操作。
        * @constant egret.gui.ListEvent.ITEM_CLICK
        */ 
        static ITEM_CLICK: string;
        /**
        * @method egret.gui.ListEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param touchPointID {number}
        * @param stageX {number}
        * @param stageY {number}
        * @param ctrlKey {boolean}
        * @param altKey {boolean}
        * @param shiftKey {boolean}
        * @param buttonDown {boolean}
        * @param itemIndex {number}
        * @param item {any}
        * @param itemRenderer {IItemRenderer}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, touchPointID?: number, stageX?: number, stageY?: number, ctrlKey?: boolean, altKey?: boolean, shiftKey?: boolean, buttonDown?: boolean, itemIndex?: number, item?: any, itemRenderer?: IItemRenderer);
        /**
        * 触发鼠标事件的项呈示器数据源项。
        * @member egret.gui.ListEvent#item
        */
        public item: any;
        /**
        * 触发鼠标事件的项呈示器。
        * @member egret.gui.ListEvent#itemRenderer
        */ 
        public itemRenderer: IItemRenderer;
        /**
        * 触发鼠标事件的项索引
        * @member egret.gui.ListEvent#itemIndex
        */ 
        public itemIndex: number;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.ListEvent.dispatchListEvent
        */
        static dispatchListEvent(target: IEventDispatcher, type: string, touchEvent?: TouchEvent, itemIndex?: number, item?: any, itemRenderer?: IItemRenderer): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.PopUpEvent
    * @classdesc
    * 弹出管理器事件
    * @extends egret.Event
    */
    class PopUpEvent extends Event {
        /**
        * 添加一个弹出框，在执行完添加之后抛出。
        * @constant egret.gui.PopUpEvent.ADD_POPUP
        */ 
        static ADD_POPUP: string;
        /**
        * 移除一个弹出框，在执行完移除之后抛出。
        * @constant egret.gui.PopUpEvent.REMOVE_POPUP
        */ 
        static REMOVE_POPUP: string;
        /**
        * 移动弹出框到最前，在执行完前置之后抛出。
        * @constant egret.gui.PopUpEvent.BRING_TO_FRONT
        */ 
        static BRING_TO_FRONT: string;
        /**
        * 构造函数
        * @method egret.gui.PopUpEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param popUp {IVisualElement}
        * @param modal {boolean}
        */ 
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, popUp?: IVisualElement, modal?: boolean);
        /**
        * 弹出框对象
        * @member egret.gui.PopUpEvent#popUp
        */ 
        public popUp: IVisualElement;
        /**
        * 弹出窗口是否为模态，此属性仅在事件类型为ADD_POPUP时有效。
        * @member egret.gui.PopUpEvent#modal
        */ 
        public modal: boolean;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.PopUpEvent.dispatchPopUpEvent
        */
        static dispatchPopUpEvent(target: IEventDispatcher, type: string, popUp?: IVisualElement, modal?: boolean): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.RendererExistenceEvent
    * @classdesc
    * 在DataGroup添加或删除项呈示器时分派的事件。
    * @extends egret.Event
    */ 
    class RendererExistenceEvent extends Event {
        /**
        * 添加了项呈示器
        * @constant egret.gui.RendererExistenceEvent.RENDERER_ADD
        */ 
        static RENDERER_ADD: string;
        /**
        * 移除了项呈示器
        * @constant egret.gui.RendererExistenceEvent.RENDERER_REMOVE
        */ 
        static RENDERER_REMOVE: string;
        /**
        * @method egret.gui.RendererExistenceEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param renderer {IItemRenderer}
        * @param index {number}
        * @param data {any}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, renderer?: IItemRenderer, index?: number, data?: any);
        /**
        * 呈示器的数据项目。
        * @member egret.gui.RendererExistenceEvent#data
        */ 
        public data: any;
        /**
        * 指向已添加或删除项呈示器的位置的索引。
        * @member egret.gui.RendererExistenceEvent#index
        */ 
        public index: number;
        /**
        * 对已添加或删除的项呈示器的引用。
        * @member egret.gui.RendererExistenceEvent#renderer
        */ 
        public renderer: IItemRenderer;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.RendererExistenceEvent.dispatchRendererExistenceEvent
        */
        static dispatchRendererExistenceEvent(target: IEventDispatcher, type: string, renderer?: IItemRenderer, index?: number, data?: any): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.StateChangeEvent
    * @classdesc
    * 视图状态改变事件
    * @extends egret.Event
    */ 
    class StateChangeEvent extends Event {
        /**
        * 当前视图状态已经改变
        * @constant egret.gui.StateChangeEvent.CURRENT_STATE_CHANGE
        */ 
        static CURRENT_STATE_CHANGE: string;
        /**
        * 当前视图状态即将改变
        * @constant egret.gui.StateChangeEvent.CURRENT_STATE_CHANGING
        */ 
        static CURRENT_STATE_CHANGING: string;
        /**
        * @method egret.gui.StateChangeEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param oldState {string}
        * @param newState {string}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, oldState?: string, newState?: string);
        /**
        * 组件正在进入的视图状态的名称。
        * @member egret.gui.StateChangeEvent#newState
        */ 
        public newState: string;
        /**
        * 组件正在退出的视图状态的名称。
        * @member egret.gui.StateChangeEvent#oldState
        */ 
        public oldState: string;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.StateChangeEvent.dispatchStateChangeEvent
        */
        static dispatchStateChangeEvent(target: IEventDispatcher, type: string, oldState?: string, newState?: string): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TrackBaseEvent
    * @classdesc
    * 从TrackBase组件分派的事件。
    * @extends egret.Event
    */ 
    class TrackBaseEvent extends Event {
        /**
        * 正在拖拽滑块
        * @constant egret.gui.TrackBaseEvent.THUMB_DRAG
        */ 
        static THUMB_DRAG: string;
        /**
        * 滑块被按下
        * @constant egret.gui.TrackBaseEvent.THUMB_PRESS
        */ 
        static THUMB_PRESS: string;
        /**
        * 滑块被放开
        * @constant egret.gui.TrackBaseEvent.THUMB_RELEASE
        */ 
        static THUMB_RELEASE: string;
        /**
        * 构造函数
        * @method egret.gui.TrackBaseEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        */ 
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.TrackBaseEvent.dispatchTrackBaseEvent
        */
        static dispatchTrackBaseEvent(target: IEventDispatcher, type: string): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TreeEvent
    * @classdesc
    * Tree事件
    * @extends egret.Event
    */
    class TreeEvent extends Event {
        /**
        * 节点关闭,注意：只有通过交互操作引起的节点关闭才会抛出此事件。
        * @constant egret.gui.TreeEvent.ITEM_CLOSE
        */ 
        static ITEM_CLOSE: string;
        /**
        * 节点打开,注意：只有通过交互操作引起的节点打开才会抛出此事件。
        * @constant egret.gui.TreeEvent.ITEM_OPEN
        */ 
        static ITEM_OPEN: string;
        /**
        * 子节点打开或关闭前一刻分派。可以调用preventDefault()方法阻止节点的状态改变。
        * @constant egret.gui.TreeEvent.ITEM_OPENING
        */ 
        static ITEM_OPENING: string;
        /**
        * @method egret.gui.TreeEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        * @param itemIndex {number}
        * @param item {any}
        * @param itemRenderer {ITreeItemRenderer}
        */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, itemIndex?: number, item?: any, itemRenderer?: ITreeItemRenderer);
        /**
        * 触发鼠标事件的项呈示器数据源项。
        * @member egret.gui.TreeEvent#item
        */
        public item: any;
        /**
        * 触发鼠标事件的项呈示器。
        * @member egret.gui.TreeEvent#itemRenderer
        */ 
        public itemRenderer: ITreeItemRenderer;
        /**
        * 触发鼠标事件的项索引
        * @member egret.gui.TreeEvent#itemIndex
        */ 
        public itemIndex: number;
        /**
        * 当事件类型为ITEM_OPENING时，true表示即将打开节点，反之关闭。
        * @member egret.gui.TreeEvent#opening
        */ 
        public opening: boolean;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method egret.gui.TreeEvent.dispatchTreeEvent
        */
        static dispatchTreeEvent(target: IEventDispatcher, type: string, itemIndex?: number, item?: any, itemRenderer?: ITreeItemRenderer, opening?: boolean): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.LayoutBase
    * @classdesc
    * 容器布局基类
    * @extends egret.EventDispatcher
    */
    class LayoutBase extends EventDispatcher {
        /**
        * @method egret.gui.LayoutBase#constructor
        */
        constructor();
        private _target;
        /**
        * 目标容器
        * @member egret.gui.LayoutBase#target
        */ 
        public target : GroupBase;
        private _useVirtualLayout;
        /**
        * 若要配置容器使用虚拟布局，请为与容器关联的布局的 useVirtualLayout 属性设置为 true。
        * 只有布局设置为 VerticalLayout、HorizontalLayout
        * 或 TileLayout 的 DataGroup 或 SkinnableDataContainer
        * 才支持虚拟布局。不支持虚拟化的布局子类必须禁止更改此属性。
        * @member egret.gui.LayoutBase#useVirtualLayout
        */
        public useVirtualLayout : boolean;
        private _typicalLayoutRect;
        /**
        * 由虚拟布局所使用，以估计尚未滚动到视图中的布局元素的大小。
        * @member egret.gui.LayoutBase#typicalLayoutRect
        */
        public typicalLayoutRect : Rectangle;
        /**
        * 滚动条位置改变
        * @method egret.gui.LayoutBase#scrollPositionChanged
        */
        public scrollPositionChanged(): void;
        /**
        * 清理虚拟布局缓存的数据
        * @method egret.gui.LayoutBase#clearVirtualLayoutCache
        */ 
        public clearVirtualLayoutCache(): void;
        /**
        * 在已添加布局元素之后且在验证目标的大小和显示列表之前，由目标调用。
        * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
        * @method egret.gui.LayoutBase#elementAdded
        * @param index {number}
        */ 
        public elementAdded(index: number): void;
        /**
        * 必须在已删除布局元素之后且在验证目标的大小和显示列表之前，由目标调用此方法。
        * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
        * @method egret.gui.LayoutBase#elementRemoved
        * @param index {number}
        */ 
        public elementRemoved(index: number): void;
        /**
        * 测量组件尺寸大小
        * @method egret.gui.LayoutBase#measure
        */ 
        public measure(): void;
        /**
        * 更新显示列表
        * @method egret.gui.LayoutBase#updateDisplayList
        * @param width {number}
        * @param height {number}
        */ 
        public updateDisplayList(width: number, height: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.BasicLayout
    * @classdesc
    * 基本布局
    * @extends egret.gui.LayoutBase
    */
    class BasicLayout extends LayoutBase {
        /**
        * @method egret.gui.BasicLayout#constructor
        */
        constructor();
        /**
        * 此布局不支持虚拟布局，设置这个属性无效
        */ 
        public useVirtualLayout : boolean;
        private _mouseWheelSpeed;
        /**
        * 鼠标滚轮每次滚动时目标容器的verticalScrollPosition
        * 或horizontalScrollPosition改变的像素距离。必须大于0， 默认值20。
        * @member egret.gui.BasicLayout#mouseWheelSpeed
        */
        public mouseWheelSpeed : number;
        /**
        * @method egret.gui.BasicLayout#getElementBoundsLeftOfScrollRect
        * @param scrollRect {Rectangle}
        * @returns {Rectangle}
        */
        public getElementBoundsLeftOfScrollRect(scrollRect: Rectangle): Rectangle;
        /**
        * @method egret.gui.BasicLayout#getElementBoundsRightOfScrollRect
        * @param scrollRect {Rectangle}
        * @returns {Rectangle}
        */
        public getElementBoundsRightOfScrollRect(scrollRect: Rectangle): Rectangle;
        /**
        * @method egret.gui.BasicLayout#getElementBoundsAboveScrollRect
        * @param scrollRect {Rectangle}
        * @returns {Rectangle}
        */
        public getElementBoundsAboveScrollRect(scrollRect: Rectangle): Rectangle;
        /**
        * @method egret.gui.BasicLayout#getElementBoundsBelowScrollRect
        * @param scrollRect {Rectangle}
        * @returns {Rectangle}
        */
        public getElementBoundsBelowScrollRect(scrollRect: Rectangle): Rectangle;
        /**
        * @method egret.gui.BasicLayout#measure
        */
        public measure(): void;
        /**
        * @method egret.gui.BasicLayout#updateDisplayList
        * @param unscaledWidth {number}
        * @param unscaledHeight {number}
        */
        public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.ColumnAlign
    * @classdesc
    * ColumnAlign 类为 TileLayout 类的 columnAlign 属性定义可能的值。
    */
    class ColumnAlign {
        /**
        * 不将行两端对齐。
        * @constant egret.gui.ColumnAlign.LEFT
        */ 
        static LEFT: string;
        /**
        * 通过增大水平间隙将行两端对齐。
        * @constant egret.gui.ColumnAlign.JUSTIFY_USING_GAP
        */
        static JUSTIFY_USING_GAP: string;
        /**
        * 通过增大行高度将行两端对齐。
        * @constant egret.gui.ColumnAlign.JUSTIFY_USING_WIDTH
        */ 
        static JUSTIFY_USING_WIDTH: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.RowAlign
    * @classdesc
    * RowAlign 类为 TileLayout 类的 rowAlign 属性定义可能的值。
    */
    class RowAlign {
        /**
        * 不进行两端对齐。
        * @constant egret.gui.RowAlign.TOP
        */
        static TOP: string;
        /**
        * 通过增大垂直间隙将行两端对齐。
        * @constant egret.gui.RowAlign.JUSTIFY_USING_GAP
        */ 
        static JUSTIFY_USING_GAP: string;
        /**
        * 通过增大行高度将行两端对齐。
        * @constant egret.gui.RowAlign.JUSTIFY_USING_HEIGHT
        */
        static JUSTIFY_USING_HEIGHT: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TileOrientation
    * @classdesc
    * TileOrientation 类为 TileLayout 类的 orientation 属性定义可能的值。
    */
    class TileOrientation {
        /**
        * 逐行排列元素。
        * @constant egret.gui.TileOrientation.ROWS
        */ 
        static ROWS: string;
        /**
        * 逐列排列元素。
        * @constant egret.gui.TileOrientation.COLUMNS
        */
        static COLUMNS: string;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.VerticalLayout
    * @classdesc
    * 垂直布局
    * @extends egret.gui.LayoutBase
    */
    class VerticalLayout extends LayoutBase {
        /**
        * @method egret.gui.VerticalLayout#constructor
        */
        constructor();
        private _horizontalAlign;
        /**
        * 布局元素的水平对齐策略。参考HorizontalAlign定义的常量。
        * @member egret.gui.VerticalLayout#horizontalAlign
        */
        public horizontalAlign : string;
        private _verticalAlign;
        /**
        * 布局元素的竖直对齐策略。参考VerticalAlign定义的常量。
        * 注意：此属性设置为CONTENT_JUSTIFY始终无效。当useVirtualLayout为true时，设置JUSTIFY也无效。
        * @member egret.gui.VerticalLayout#verticalAlign
        */
        public verticalAlign : string;
        private _gap;
        /**
        * 布局元素之间的垂直空间（以像素为单位）
        * @member egret.gui.VerticalLayout#gap
        */
        public gap : number;
        private _padding;
        /**
        * 四个边缘的共同内边距。若单独设置了任一边缘的内边距，则该边缘的内边距以单独设置的值为准。
        * 此属性主要用于快速设置多个边缘的相同内边距。默认值：0。
        * @member egret.gui.VerticalLayout#padding
        */
        public padding : number;
        private _paddingLeft;
        /**
        * 容器的左边缘与布局元素的左边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.VerticalLayout#paddingLeft
        */
        public paddingLeft : number;
        private _paddingRight;
        /**
        * 容器的右边缘与布局元素的右边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.VerticalLayout#paddingRight
        */
        public paddingRight : number;
        private _paddingTop;
        /**
        * 容器的顶边缘与第一个布局元素的顶边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.VerticalLayout#paddingTop
        */
        public paddingTop : number;
        private _paddingBottom;
        /**
        * 容器的底边缘与最后一个布局元素的底边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.VerticalLayout#paddingBottom
        */
        public paddingBottom : number;
        /**
        * 标记目标容器的尺寸和显示列表失效
        */
        private invalidateTargetSizeAndDisplayList();
        /**
        * @method egret.gui.VerticalLayout#measure
        */
        public measure(): void;
        /**
        * 测量使用虚拟布局的尺寸
        */
        private measureVirtual();
        /**
        * 测量使用真实布局的尺寸
        */
        private measureReal();
        /**
        * @method egret.gui.VerticalLayout#updateDisplayList
        * @param width {number}
        * @param height {number}
        */
        public updateDisplayList(width: number, height: number): void;
        /**
        * 虚拟布局使用的子对象尺寸缓存
        */
        private elementSizeTable;
        /**
        * 获取指定索引的起始位置
        */
        private getStartPosition(index);
        /**
        * 获取指定索引的元素尺寸
        */
        private getElementSize(index);
        /**
        * 获取缓存的子对象尺寸总和
        */
        private getElementTotalSize();
        /**
        * @method egret.gui.VerticalLayout#elementAdded
        * @param index {number}
        */
        public elementAdded(index: number): void;
        /**
        * @method egret.gui.VerticalLayout#elementRemoved
        * @param index {number}
        */
        public elementRemoved(index: number): void;
        /**
        * @method egret.gui.VerticalLayout#clearVirtualLayoutCache
        */
        public clearVirtualLayoutCache(): void;
        /**
        * 折半查找法寻找指定位置的显示对象索引
        */
        private findIndexAt(y, i0, i1);
        /**
        * 虚拟布局使用的当前视图中的第一个元素索引
        */
        private startIndex;
        /**
        * 虚拟布局使用的当前视图中的最后一个元素的索引
        */
        private endIndex;
        /**
        * 视图的第一个和最后一个元素的索引值已经计算好的标志
        */
        private indexInViewCalculated;
        /**
        * @method egret.gui.VerticalLayout#scrollPositionChanged
        */
        public scrollPositionChanged(): void;
        /**
        * 获取视图中第一个和最后一个元素的索引,返回是否发生改变
        */
        private getIndexInView();
        /**
        * 子对象最大宽度
        */
        private maxElementWidth;
        /**
        * 更新使用虚拟布局的显示列表
        */
        private updateDisplayListVirtual(width, height);
        /**
        * 更新使用真实布局的显示列表
        */
        private updateDisplayListReal(width, height);
        /**
        * 为每个可变尺寸的子项分配空白区域
        * @method egret.gui.VerticalLayout.flexChildrenProportionally
        * @param spaceForChildren {number}
        * @param spaceToDistribute {number}
        * @param totalPercent {number}
        * @param childInfoArray {Array<any>}
        */
        static flexChildrenProportionally(spaceForChildren: number, spaceToDistribute: number, totalPercent: number, childInfoArray: any[]): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.HorizontalLayout
    * @classdesc
    * 水平布局
    * @extends egret.gui.LayoutBase
    */
    class HorizontalLayout extends LayoutBase {
        /**
        * @method egret.gui.HorizontalLayout#constructor
        */
        constructor();
        private _horizontalAlign;
        /**
        * 布局元素的水平对齐策略。参考HorizontalAlign定义的常量。
        * 注意：此属性设置为CONTENT_JUSTIFY始终无效。当useVirtualLayout为true时，设置JUSTIFY也无效。
        * @member egret.gui.HorizontalLayout#horizontalAlign
        */
        public horizontalAlign : string;
        private _verticalAlign;
        /**
        * 布局元素的竖直对齐策略。参考VerticalAlign定义的常量。
        * @member egret.gui.HorizontalLayout#verticalAlign
        */
        public verticalAlign : string;
        private _gap;
        /**
        * 布局元素之间的水平空间（以像素为单位）
        * @member egret.gui.HorizontalLayout#gap
        */
        public gap : number;
        private _padding;
        /**
        * 四个边缘的共同内边距。若单独设置了任一边缘的内边距，则该边缘的内边距以单独设置的值为准。
        * 此属性主要用于快速设置多个边缘的相同内边距。默认值：0。
        * @member egret.gui.HorizontalLayout#padding
        */
        public padding : number;
        private _paddingLeft;
        /**
        * 容器的左边缘与布局元素的左边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.HorizontalLayout#paddingLeft
        */
        public paddingLeft : number;
        private _paddingRight;
        /**
        * 容器的右边缘与布局元素的右边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.HorizontalLayout#paddingRight
        */
        public paddingRight : number;
        private _paddingTop;
        /**
        * 容器的顶边缘与第一个布局元素的顶边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.HorizontalLayout#paddingTop
        */
        public paddingTop : number;
        private _paddingBottom;
        /**
        * 容器的底边缘与最后一个布局元素的底边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.HorizontalLayout#paddingBottom
        */
        public paddingBottom : number;
        /**
        * 标记目标容器的尺寸和显示列表失效
        */ 
        private invalidateTargetSizeAndDisplayList();
        /**
        * @method egret.gui.HorizontalLayout#measure
        */
        public measure(): void;
        /**
        * 测量使用虚拟布局的尺寸
        */ 
        private measureVirtual();
        /**
        * 测量使用真实布局的尺寸
        */ 
        private measureReal();
        /**
        * @method egret.gui.HorizontalLayout#updateDisplayList
        * @param width {number}
        * @param height {number}
        */
        public updateDisplayList(width: number, height: number): void;
        /**
        * 虚拟布局使用的子对象尺寸缓存
        */ 
        private elementSizeTable;
        /**
        * 获取指定索引的起始位置
        */ 
        private getStartPosition(index);
        /**
        * 获取指定索引的元素尺寸
        */ 
        private getElementSize(index);
        /**
        * 获取缓存的子对象尺寸总和
        */ 
        private getElementTotalSize();
        /**
        * @method egret.gui.HorizontalLayout#elementAdded
        * @param index {number}
        */
        public elementAdded(index: number): void;
        /**
        * @method egret.gui.HorizontalLayout#elementRemoved
        * @param index {number}
        */
        public elementRemoved(index: number): void;
        /**
        * @method egret.gui.HorizontalLayout#clearVirtualLayoutCache
        */
        public clearVirtualLayoutCache(): void;
        /**
        * 折半查找法寻找指定位置的显示对象索引
        */ 
        private findIndexAt(x, i0, i1);
        /**
        * 虚拟布局使用的当前视图中的第一个元素索引
        */ 
        private startIndex;
        /**
        * 虚拟布局使用的当前视图中的最后一个元素的索引
        */ 
        private endIndex;
        /**
        * 视图的第一个和最后一个元素的索引值已经计算好的标志
        */ 
        private indexInViewCalculated;
        /**
        * @method egret.gui.HorizontalLayout#scrollPositionChanged
        */
        public scrollPositionChanged(): void;
        /**
        * 获取视图中第一个和最后一个元素的索引,返回是否发生改变
        */ 
        private getIndexInView();
        /**
        * 子对象最大宽度
        */ 
        private maxElementHeight;
        /**
        * 更新使用虚拟布局的显示列表
        */ 
        private updateDisplayListVirtual(width, height);
        /**
        * 更新使用真实布局的显示列表
        */ 
        private updateDisplayListReal(width, height);
        /**
        * 为每个可变尺寸的子项分配空白区域
        * @method egret.gui.HorizontalLayout.flexChildrenProportionally
        * @param spaceForChildren {number}
        * @param spaceToDistribute {number}
        * @param totalPercent {number}
        * @param childInfoArray {Array<any>}
        */ 
        static flexChildrenProportionally(spaceForChildren: number, spaceToDistribute: number, totalPercent: number, childInfoArray: any[]): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.TileLayout
    * @classdesc
    * 格子布局
    * @extends egret.gui.LayoutBase
    */
    class TileLayout extends LayoutBase {
        /**
        * 构造函数
        * @method egret.gui.TileLayout#constructor
        */ 
        constructor();
        /**
        * 标记horizontalGap被显式指定过
        */
        private explicitHorizontalGap;
        private _horizontalGap;
        /**
        * 列之间的水平空间（以像素为单位）。
        * @member egret.gui.TileLayout#horizontalGap
        */ 
        public horizontalGap : number;
        /**
        * 标记verticalGap被显式指定过
        */ 
        private explicitVerticalGap;
        private _verticalGap;
        /**
        * 行之间的垂直空间（以像素为单位）。
        * @member egret.gui.TileLayout#verticalGap
        */ 
        public verticalGap : number;
        private _columnCount;
        /**
        * 实际列计数。
        * @member egret.gui.TileLayout#columnCount
        */ 
        public columnCount : number;
        private _requestedColumnCount;
        /**
        * 要显示的列数。设置为0表示自动确定列计数,默认值0。<br/>
        * 注意:当orientation为TileOrientation.COLUMNS(逐列排列元素)且taget被显式设置宽度时，此属性无效。
        * @member egret.gui.TileLayout#requestedColumnCount
        */
        public requestedColumnCount : number;
        private _rowCount;
        /**
        * 实际行计数。
        * @member egret.gui.TileLayout#rowCount
        */ 
        public rowCount : number;
        private _requestedRowCount;
        /**
        * 要显示的行数。设置为0表示自动确定行计数,默认值0。<br/>
        * 注意:当orientation为TileOrientation.ROWS(即逐行排列元素,此为默认值)且target被显式设置高度时，此属性无效。
        * @member egret.gui.TileLayout#requestedRowCount
        */
        public requestedRowCount : number;
        /**
        * 外部显式指定的列宽
        */
        private explicitColumnWidth;
        private _columnWidth;
        /**
        * 实际列宽（以像素为单位）。 若未显式设置，则从根据最宽的元素的宽度确定列宽度。
        * @member egret.gui.TileLayout#columnWidth
        */ /**
        *  @private
        */
        public columnWidth : number;
        /**
        * 外部显式指定的行高
        */ 
        private explicitRowHeight;
        private _rowHeight;
        /**
        * 行高（以像素为单位）。 如果未显式设置，则从元素的高度的最大值确定行高度。
        * @member egret.gui.TileLayout#rowHeight
        */ /**
        *  @private
        */
        public rowHeight : number;
        private _padding;
        /**
        * 四个边缘的共同内边距。若单独设置了任一边缘的内边距，则该边缘的内边距以单独设置的值为准。
        * 此属性主要用于快速设置多个边缘的相同内边距。默认值：0。
        * @member egret.gui.TileLayout#padding
        */
        public padding : number;
        private _paddingLeft;
        /**
        * 容器的左边缘与布局元素的左边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.TileLayout#paddingLeft
        */
        public paddingLeft : number;
        private _paddingRight;
        /**
        * 容器的右边缘与布局元素的右边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.TileLayout#paddingRight
        */
        public paddingRight : number;
        private _paddingTop;
        /**
        * 容器的顶边缘与第一个布局元素的顶边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.TileLayout#paddingTop
        */
        public paddingTop : number;
        private _paddingBottom;
        /**
        * 容器的底边缘与最后一个布局元素的底边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
        * @member egret.gui.TileLayout#paddingBottom
        */
        public paddingBottom : number;
        private _horizontalAlign;
        /**
        * 指定如何在水平方向上对齐单元格内的元素。
        * 支持的值有 HorizontalAlign.LEFT、HorizontalAlign.CENTER、
        * HorizontalAlign.RIGHT、HorizontalAlign.JUSTIFY。
        * 默认值：HorizontalAlign.JUSTIFY
        * @member egret.gui.TileLayout#horizontalAlign
        */ 
        public horizontalAlign : string;
        private _verticalAlign;
        /**
        * 指定如何在垂直方向上对齐单元格内的元素。
        * 支持的值有 VerticalAlign.TOP、VerticalAlign.MIDDLE、
        * VerticalAlign.BOTTOM、VerticalAlign.JUSTIFY。
        * 默认值：VerticalAlign.JUSTIFY。
        * @member egret.gui.TileLayout#verticalAlign
        */ 
        public verticalAlign : string;
        private _columnAlign;
        /**
        * 指定如何将完全可见列与容器宽度对齐。
        * 设置为 ColumnAlign.LEFT 时，它会关闭列两端对齐。在容器的最后一列和右边缘之间可能存在部分可见的列或空白。这是默认值。
        * 设置为 ColumnAlign.JUSTIFY_USING_GAP 时，horizontalGap 的实际值将增大，
        * 这样最后一个完全可见列右边缘会与容器的右边缘对齐。仅存在一个完全可见列时，
        * horizontalGap 的实际值将增大，这样它会将任何部分可见列推到容器的右边缘之外。
        * 请注意显式设置 horizontalGap 属性不会关闭两端对齐。它仅确定初始间隙值。两端对齐可能会增大它。
        * 设置为 ColumnAlign.JUSTIFY_USING_WIDTH 时，columnWidth 的实际值将增大，
        * 这样最后一个完全可见列右边缘会与容器的右边缘对齐。请注意显式设置 columnWidth 属性不会关闭两端对齐。
        * 它仅确定初始列宽度值。两端对齐可能会增大它。
        * @member egret.gui.TileLayout#columnAlign
        */ 
        public columnAlign : string;
        private _rowAlign;
        /**
        * @member egret.gui.TileLayout#rowAlign
        */
        /**
        * 指定如何将完全可见行与容器高度对齐。
        * 设置为 RowAlign.TOP 时，它会关闭列两端对齐。在容器的最后一行和底边缘之间可能存在部分可见的行或空白。这是默认值。
        *
        * 设置为 RowAlign.JUSTIFY_USING_GAP 时，verticalGap 的实际值会增大，
        * 这样最后一个完全可见行底边缘会与容器的底边缘对齐。仅存在一个完全可见行时，verticalGap 的值会增大，
        * 这样它会将任何部分可见行推到容器的底边缘之外。请注意，显式设置 verticalGap
        * 不会关闭两端对齐，而只是确定初始间隙值。两端对齐接着可以增大它。
        *
        * 设置为 RowAlign.JUSTIFY_USING_HEIGHT 时，rowHeight 的实际值会增大，
        * 这样最后一个完全可见行底边缘会与容器的底边缘对齐。请注意，显式设置 rowHeight
        * 不会关闭两端对齐，而只是确定初始行高度值。两端对齐接着可以增大它。
        */ 
        public rowAlign : string;
        private _orientation;
        /**
        * 指定是逐行还是逐列排列元素。
        * @member egret.gui.TileLayout#orientation
        */ 
        public orientation : string;
        /**
        * 标记目标容器的尺寸和显示列表失效
        */ 
        private invalidateTargetSizeAndDisplayList();
        /**
        * @method egret.gui.TileLayout#measure
        */
        public measure(): void;
        /**
        * 计算行和列的尺寸及数量
        */ 
        private calculateRowAndColumn(explicitWidth, explicitHeight);
        /**
        * 缓存的最大子对象宽度
        */ 
        private maxElementWidth;
        /**
        * 缓存的最大子对象高度
        */ 
        private maxElementHeight;
        /**
        * 更新最大子对象尺寸
        */ 
        private updateMaxElementSize();
        /**
        * 更新虚拟布局的最大子对象尺寸
        */ 
        private updateMaxElementSizeVirtual();
        /**
        * 更新真实布局的最大子对象尺寸
        */ 
        private updateMaxElementSizeReal();
        /**
        * @method egret.gui.TileLayout#clearVirtualLayoutCache
        */
        public clearVirtualLayoutCache(): void;
        /**
        * 当前视图中的第一个元素索引
        */ 
        private startIndex;
        /**
        * 当前视图中的最后一个元素的索引
        */ 
        private endIndex;
        /**
        * 视图的第一个和最后一个元素的索引值已经计算好的标志
        */ 
        private indexInViewCalculated;
        /**
        * @method egret.gui.TileLayout#scrollPositionChanged
        */
        public scrollPositionChanged(): void;
        /**
        * 获取视图中第一个和最后一个元素的索引,返回是否发生改变
        */ 
        private getIndexInView();
        /**
        * @method egret.gui.TileLayout#updateDisplayList
        * @param width {number}
        * @param height {number}
        */
        public updateDisplayList(width: number, height: number): void;
        /**
        * 为单个元素布局
        */ 
        private sizeAndPositionElement(element, cellX, cellY, cellWidth, cellHeight);
        /**
        * 为两端对齐调整间隔或格子尺寸
        */ 
        private adjustForJustify(width, height);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.UILayer
    * @classdesc
    * UIStage的虚拟子容器
    * @implements egret.gui.IContainer
    */
    class UILayer implements IContainer {
        /**
        * 构造函数
        * @method egret.gui.UILayer#constructor
        * @param owner {IUIStage}
        * @param lowerBoundReference {string}
        * @param upperBoundReference {strin}
        */ 
        constructor(owner: IUIStage, lowerBoundReference: string, upperBoundReference: string);
        /**
        * 实体容器
        */ 
        private owner;
        /**
        * 容器下边界属性
        */ 
        private lowerBoundReference;
        /**
        * 容器上边界属性
        */ 
        private upperBoundReference;
        /**
        * @member egret.gui.UILayer#numElements
        */
        public numElements : number;
        private raw_getElementAt;
        private raw_addElementAt;
        private raw_getElementIndex;
        private raw_removeElement;
        private raw_removeElementAt;
        private raw_setElementIndex;
        /**
        * @method egret.gui.UILayer#getElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public getElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.UILayer#addElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public addElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.UILayer#addElementAt
        * @param element {IVisualElement}
        * @param index {number}
        * @returns {IVisualElement}
        */
        public addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
        * @method egret.gui.UILayer#removeElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public removeElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.UILayer#removeElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public removeElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.UILayer#getElementIndex
        * @param element {IVisualElement}
        * @returns {number}
        */
        public getElementIndex(element: IVisualElement): number;
        /**
        * @method egret.gui.UILayer#setElementIndex
        * @param element {IVisualElement}
        * @param index {number}
        */
        public setElementIndex(element: IVisualElement, index: number): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.UIStage
    * @classdesc
    * 系统管理器，应用程序顶级容器。
    * 通常情况下，一个程序应该只含有唯一的系统管理器,并且所有的组件都包含在它内部。
    * 它负责管理弹窗，鼠标样式，工具提示的显示层级，以及过滤鼠标和键盘事件为可以取消的。
    * @extends egret.gui.Group
    * @implements egret.gui.IUIStage
    */ 
    class UIStage extends Group implements IUIStage {
        /**
        * 构造函数
        * @method egret.gui.UIStage#constructor
        */ 
        constructor();
        /**
        * 添加到舞台
        */ 
        private onAddToStage(event?);
        /**
        * 从舞台移除
        */ 
        private onRemoveFromStage(event);
        /**
        * 舞台尺寸改变
        */ 
        private onResize(event?);
        private _autoResize;
        /**
        * 是否自动跟随舞台缩放。当此属性为true时，将强制让UIState始终与舞台保持相同大小。
        * 反之需要外部手动同步大小。默认值为true。
        * @member egret.gui.UIStage#autoResize
        */
        public autoResize : boolean;
        /**
        * @constant egret.gui.UIStage#x
        */
        /**
        * @inheritDoc
        */
        public x : number;
        /**
        * @constant egret.gui.UIStage#y
        */
        /**
        * @inheritDoc
        */
        public y : number;
        /**
        * @member egret.gui.UIStage#width
        */
        /**
        * @inheritDoc
        */
        public width : number;
        /**
        * @member egret.gui.UIStage#height
        */
        /**
        * @inheritDoc
        */
        public height : number;
        /**
        * @member egret.gui.UIStage#scaleX
        */
        /**
        * @inheritDoc
        */
        public scaleX : number;
        /**
        * @member egret.gui.UIStage#scaleY
        */
        /**
        * @inheritDoc
        */
        public scaleY : number;
        /**
        * @method egret.gui.UIStage#setActualSize
        * @param w {number}
        * @param h {number}
        */
        public setActualSize(w: number, h: number): void;
        /**
        * @method egret.gui.UIStage#setLayoutBoundsPosition
        * @param x {number}
        * @param y {number}
        */
        public setLayoutBoundsPosition(x: number, y: number): void;
        /**
        * @method egret.gui.UIStage#setLayoutBoundsSize
        * @param layoutWidth {number}
        * @param layoutHeight {number}
        */
        public setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
        * 布局对象,UIStage只接受BasicLayout
        * @member egret.gui.UIStage#layout
        */ 
        public layout : LayoutBase;
        private _popUpContainer;
        /**
        * 弹出窗口层容器。
        * @member egret.gui.UIStage#popUpContainer
        */ 
        public popUpContainer : IContainer;
        private _toolTipContainer;
        /**
        * 工具提示层容器。
        * @member egret.gui.UIStage#toolTipContainer
        */ 
        public toolTipContainer : IContainer;
        private _cursorContainer;
        /**
        * 鼠标样式层容器。
        * @member egret.gui.UIStage#cursorContainer
        */ 
        public cursorContainer : IContainer;
        private _noTopMostIndex;
        /**
        * 弹出窗口层的起始索引(包括)
        */ 
        private noTopMostIndex;
        private _topMostIndex;
        /**
        * 弹出窗口层结束索引(不包括)
        */ 
        private topMostIndex;
        private _toolTipIndex;
        /**
        * 工具提示层结束索引(不包括)
        */ 
        private toolTipIndex;
        private _cursorIndex;
        /**
        * 鼠标样式层结束索引(不包括)
        */ 
        private cursorIndex;
        /**
        * @method egret.gui.UIStage#addElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public addElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.UIStage#addElementAt
        * @param element {IVisualElement}
        * @param index {number}
        * @returns {IVisualElement}
        */
        public addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
        * @method egret.gui.UIStage#removeElement
        * @param element {IVisualElement}
        * @returns {IVisualElement}
        */
        public removeElement(element: IVisualElement): IVisualElement;
        /**
        * @method egret.gui.UIStage#removeElementAt
        * @param index {number}
        * @returns {IVisualElement}
        */
        public removeElementAt(index: number): IVisualElement;
        /**
        * @method egret.gui.UIStage#removeAllElements
        */
        public removeAllElements(): void;
        /**
        * @method egret.gui.UIStage#_elementRemoved
        * @param element {IVisualElement}
        * @param index {number}
        * @param notifyListeners {boolean}
        */
        public _elementRemoved(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        private raw_getElementAt(index);
        private raw_addElement(element);
        private raw_addElementAt(element, index);
        private raw_removeElement(element);
        private raw_removeElementAt(index);
        private raw_removeAllElements();
        private raw_getElementIndex(element);
        private raw_setElementIndex(element, index);
        private raw_swapElements(element1, element2);
        private raw_swapElementsAt(index1, index2);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.PopUpManagerImpl
    * @classdesc
    * 窗口弹出管理器实现类
    * @extends egret.EventDispatcher
    * @implements egret.gui.IPopUpManager
    */
    class PopUpManagerImpl extends EventDispatcher implements IPopUpManager {
        /**
        * 构造函数
        * @method egret.gui.PopUpManagerImpl#constructor
        */
        constructor();
        private _popUpList;
        /**
        * 已经弹出的窗口列表
        * @member egret.gui.PopUpManagerImpl#popUpList
        */
        public popUpList : any[];
        /**
        * 模态窗口列表
        */
        private popUpDataList;
        /**
        * 根据popUp获取对应的popUpData
        */
        private findPopUpData(popUp);
        private static REMOVE_FROM_UISTAGE;
        /**
        * 弹出一个窗口。<br/>
        * @method egret.gui.PopUpManagerImpl#addPopUp
        * @param popUp {IVisualElement} 要弹出的窗口
        * @param modal {boolean} 是否启用模态。即禁用弹出窗口所在层以下的鼠标事件。默认false。
        * @param center {boolean} 是否居中窗口。等效于在外部调用centerPopUp()来居中。默认true。
        */
        public addPopUp(popUp: IVisualElement, modal?: boolean, center?: boolean): void;
        /**
        * 从舞台移除
        */
        private onRemoved(event);
        private _modalColor;
        /**
        * 模态遮罩的填充颜色
        * @member egret.gui.PopUpManagerImpl#modalColor
        */
        public modalColor : number;
        private _modalAlpha;
        /**
        * 模态遮罩的透明度
        * @member egret.gui.PopUpManagerImpl#modalAlpha
        */
        public modalAlpha : number;
        private invalidateModalFlag;
        /**
        * 标记一个UIStage的模态层失效
        */
        private invalidateModal();
        private validateModal(event);
        private modalMask;
        /**
        * 更新窗口模态效果
        */
        private updateModal(uiStage);
        /**
        * 移除由addPopUp()方法弹出的窗口。
        * @method egret.gui.PopUpManagerImpl#removePopUp
        * @param popUp {IVisualElement} 要移除的窗口
        */
        public removePopUp(popUp: IVisualElement): void;
        /**
        * 将指定窗口居中显示
        * @method egret.gui.PopUpManagerImpl#centerPopUp
        * @param popUp {IVisualElement} 要居中显示的窗口
        */
        public centerPopUp(popUp: IVisualElement): void;
        /**
        * 将指定窗口的层级调至最前
        * @method egret.gui.PopUpManagerImpl#bringToFront
        * @param popUp {IVisualElement} 要最前显示的窗口
        */
        public bringToFront(popUp: IVisualElement): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret.gui {
    /**
    * @class egret.gui.PopUpManager
    * @classdesc
    * 窗口弹出管理器<p/>
    * 若项目需要自定义弹出框管理器，请实现IPopUpManager接口，
    * 并在项目初始化前调用Injector.mapClass("egret.gui.IPopUpManager",YourPopUpManager)，
    * 注入自定义的弹出框管理器类。
    */ 
    class PopUpManager {
        /**
        * 构造函数
        * @method egret.gui.PopUpManager#constructor
        */ 
        constructor();
        private static _impl;
        /**
        * 获取单例
        */ 
        private static getImpl();
        /**
        * 模态遮罩的填充颜色
        * @member egret.gui.PopUpManager#modalColor
        */
        public modalColor : number;
        /**
        * 模态遮罩的透明度
        * @member egret.gui.PopUpManager#modalAlpha
        */
        public modalAlpha : number;
        /**
        * 弹出一个窗口。<br/>
        * @method egret.gui.PopUpManager.addPopUp
        * @param popUp {IVisualElement} 要弹出的窗口
        * @param modal {boolean} 是否启用模态。即禁用弹出窗口所在层以下的鼠标事件。默认false。
        * @param center {boolean} 是否居中窗口。等效于在外部调用centerPopUp()来居中。默认true。
        */ 
        static addPopUp(popUp: IVisualElement, modal?: boolean, center?: boolean): void;
        /**
        * 移除由addPopUp()方法弹出的窗口。
        * @method egret.gui.PopUpManager.removePopUp
        * @param popUp {IVisualElement} 要移除的窗口
        */ 
        static removePopUp(popUp: IVisualElement): void;
        /**
        * 将指定窗口居中显示
        * @method egret.gui.PopUpManager.centerPopUp
        * @param popUp {IVisualElement} 要居中显示的窗口
        */
        static centerPopUp(popUp: IVisualElement): void;
        /**
        * 将指定窗口的层级调至最前
        * @method egret.gui.PopUpManager.bringToFront
        * @param popUp {IVisualElement} 要最前显示的窗口
        */ 
        static bringToFront(popUp: IVisualElement): void;
        /**
        * 已经弹出的窗口列表
        * @member egret.gui.PopUpManager.popUpList
        */ 
        static popUpList : any[];
        /**
        * 添加事件监听,参考PopUpEvent定义的常量。
        * @method egret.gui.PopUpManager.addEventListener
        * @see org.flexlite.domUI.events.PopUpEvent
        * @param type {string}
        * @param listener {Function}
        * @param thisObject {any}
        * @param useCapture {boolean}
        * @param priority {number}
        */ 
        static addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        /**
        * 移除事件监听,参考PopUpEvent定义的常量。
        * @method egret.gui.PopUpManager.removeEventListener
        * @see org.flexlite.domUI.events.PopUpEvent
        * @param type {string}
        * @param listener {Function}
        * @param thisObject {any}
        * @param useCapture {boolean}
        */ 
        static removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module dragonBones {
    module geom {
        class Point {
            public x: number;
            public y: number;
            constructor(x?: number, y?: number);
            public toString(): string;
        }
        class Rectangle {
            public x: number;
            public y: number;
            public width: number;
            public height: number;
            constructor(x?: number, y?: number, width?: number, height?: number);
        }
        class Matrix {
            public a: number;
            public b: number;
            public c: number;
            public d: number;
            public tx: number;
            public ty: number;
            constructor();
            public invert(): void;
        }
        class ColorTransform {
            public alphaMultiplier: number;
            public alphaOffset: number;
            public blueMultiplier: number;
            public blueOffset: number;
            public greenMultiplier: number;
            public greenOffset: number;
            public redMultiplier: number;
            public redOffset: number;
            constructor();
        }
    }
    module events {
        class Event {
            public type: string;
            public target: EventDispatcher;
            constructor(type: string);
        }
        class AnimationEvent extends Event {
            static FADE_IN: string;
            static FADE_OUT: string;
            static START: string;
            static COMPLETE: string;
            static LOOP_COMPLETE: string;
            static FADE_IN_COMPLETE: string;
            static FADE_OUT_COMPLETE: string;
            public animationState: animation.AnimationState;
            public armature: Armature;
            constructor(type: string);
        }
        class ArmatureEvent extends Event {
            static Z_ORDER_UPDATED: string;
            constructor(type: string);
        }
        class FrameEvent extends Event {
            static ANIMATION_FRAME_EVENT: string;
            static BONE_FRAME_EVENT: string;
            public animationState: animation.AnimationState;
            public armature: Armature;
            public bone: Bone;
            public frameLabel: string;
            constructor(type: string);
        }
        class SoundEvent extends Event {
            static SOUND: string;
            static BONE_FRAME_EVENT: string;
            public animationState: animation.AnimationState;
            public armature: Armature;
            public sound: string;
            constructor(type: string);
        }
        class EventDispatcher {
            private _listenersMap;
            constructor();
            public hasEventListener(type: string): boolean;
            public addEventListener(type: string, listener: Function): void;
            public removeEventListener(type: string, listener: Function): void;
            public removeAllEventListeners(type: string): void;
            public dispatchEvent(event: Event): void;
        }
        class SoundEventManager extends EventDispatcher {
            private static _instance;
            static getInstance(): SoundEventManager;
            constructor();
        }
    }
    module animation {
        interface IAnimatable {
            advanceTime(passedTime: number): void;
        }
        class WorldClock implements IAnimatable {
            static clock: WorldClock;
            public time: number;
            public timeScale: number;
            private _animatableList;
            constructor();
            public contains(animatable: IAnimatable): boolean;
            public add(animatable: IAnimatable): void;
            public remove(animatable: IAnimatable): void;
            public clear(): void;
            public advanceTime(passedTime: number): void;
        }
        class TimelineState {
            private static HALF_PI;
            private static _pool;
            static _borrowObject(): TimelineState;
            /** @private */
            static _returnObject(timeline: TimelineState): void;
            /** @private */
            static _clear(): void;
            static getEaseValue(value: number, easing: number): number;
            public transform: objects.DBTransform;
            public pivot: geom.Point;
            public tweenActive: boolean;
            private _updateState;
            private _animationState;
            private _bone;
            private _timeline;
            private _currentFrame;
            private _currentFramePosition;
            private _currentFrameDuration;
            private _durationTransform;
            private _durationPivot;
            private _durationColor;
            private _originTransform;
            private _originPivot;
            private _tweenEasing;
            private _tweenTransform;
            private _tweenColor;
            private _totalTime;
            constructor();
            public fadeIn(bone: Bone, animationState: AnimationState, timeline: objects.TransformTimeline): void;
            public fadeOut(): void;
            public update(progress: number): void;
            private clear();
        }
        class AnimationState {
            private static _pool;
            /** @private */
            static _borrowObject(): AnimationState;
            /** @private */
            static _returnObject(animationState: AnimationState): void;
            /** @private */
            static _clear(): void;
            public enabled: boolean;
            public tweenEnabled: boolean;
            public blend: boolean;
            public group: string;
            public weight: number;
            public name: string;
            public clip: objects.AnimationData;
            public loopCount: number;
            public loop: number;
            public layer: number;
            public isPlaying: boolean;
            public isComplete: boolean;
            public totalTime: number;
            public currentTime: number;
            public timeScale: number;
            public displayControl: boolean;
            /** @private */
            public _timelineStates: any;
            /** @private */
            public _fadeWeight: number;
            private _armature;
            private _currentFrame;
            private _mixingTransforms;
            private _fadeState;
            private _fadeInTime;
            private _fadeOutTime;
            private _fadeOutBeginTime;
            private _fadeOutWeight;
            private _fadeIn;
            private _fadeOut;
            private _pauseBeforeFadeInComplete;
            constructor();
            public fadeIn(armature: Armature, clip: objects.AnimationData, fadeInTime: number, timeScale: number, loop: number, layer: number, displayControl: boolean, pauseBeforeFadeInComplete: boolean): void;
            public fadeOut(fadeOutTime: number, pause?: boolean): void;
            public play(): void;
            public stop(): void;
            public getMixingTransform(timelineName: string): number;
            public addMixingTransform(timelineName: string, type?: number, recursive?: boolean): void;
            public removeMixingTransform(timelineName?: string, recursive?: boolean): void;
            public advanceTime(passedTime: number): boolean;
            private updateTimelineStates();
            private addTimelineState(timelineName);
            private removeTimelineState(timelineName);
            private clear();
        }
        class Animation {
            static NONE: string;
            static SAME_LAYER: string;
            static SAME_GROUP: string;
            static SAME_LAYER_AND_GROUP: string;
            static ALL: string;
            public tweenEnabled: boolean;
            public timeScale: number;
            public animationNameList: string[];
            /** @private */
            public _animationLayer: AnimationState[][];
            /** @private */
            public _lastAnimationState: AnimationState;
            private _armature;
            private _isPlaying;
            public getLastAnimationName(): string;
            public getLastAnimationState(): AnimationState;
            private _animationDataList;
            public getAnimationDataList(): objects.AnimationData[];
            public setAnimationDataList(value: objects.AnimationData[]): void;
            public getIsPlaying(): boolean;
            public getIsComplete(): boolean;
            constructor(armature: Armature);
            public dispose(): void;
            public gotoAndPlay(animationName: string, fadeInTime?: number, duration?: number, loop?: number, layer?: number, group?: string, fadeOutMode?: string, displayControl?: boolean, pauseFadeOut?: boolean, pauseFadeIn?: boolean): AnimationState;
            public play(): void;
            public stop(): void;
            public getState(name: string, layer?: number): AnimationState;
            public hasAnimation(animationName: string): boolean;
            public advanceTime(passedTime: number): void;
            private addLayer(layer);
            private addState(animationState);
            private removeState(animationState);
        }
    }
    module objects {
        class DBTransform {
            public x: number;
            public y: number;
            public skewX: number;
            public skewY: number;
            public scaleX: number;
            public scaleY: number;
            constructor();
            public getRotation(): number;
            public setRotation(value: number): void;
            public copy(transform: DBTransform): void;
            public toString(): string;
        }
        class Frame {
            public position: number;
            public duration: number;
            public action: string;
            public event: string;
            public sound: string;
            constructor();
            public dispose(): void;
        }
        class TransformFrame extends Frame {
            public tweenEasing: number;
            public tweenRotate: number;
            public displayIndex: number;
            public zOrder: number;
            public visible: boolean;
            public global: DBTransform;
            public transform: DBTransform;
            public pivot: geom.Point;
            public color: geom.ColorTransform;
            constructor();
            public dispose(): void;
        }
        class Timeline {
            public duration: number;
            public scale: number;
            private _frameList;
            public getFrameList(): Frame[];
            constructor();
            public dispose(): void;
            public addFrame(frame: Frame): void;
        }
        class TransformTimeline extends Timeline {
            static HIDE_TIMELINE: TransformTimeline;
            public transformed: boolean;
            public offset: number;
            public originTransform: DBTransform;
            public originPivot: geom.Point;
            constructor();
            public dispose(): void;
        }
        class AnimationData extends Timeline {
            public frameRate: number;
            public name: string;
            public loop: number;
            public tweenEasing: number;
            public fadeInTime: number;
            private _timelines;
            public getTimelines(): any;
            constructor();
            public dispose(): void;
            public getTimeline(timelineName: string): TransformTimeline;
            public addTimeline(timeline: TransformTimeline, timelineName: string): void;
        }
        class DisplayData {
            static ARMATURE: string;
            static IMAGE: string;
            public name: string;
            public type: string;
            public transform: DBTransform;
            public pivot: geom.Point;
            constructor();
            public dispose(): void;
        }
        class SlotData {
            public name: string;
            public parent: string;
            public zOrder: number;
            public blendMode: string;
            private _displayDataList;
            public getDisplayDataList(): DisplayData[];
            constructor();
            public dispose(): void;
            public addDisplayData(displayData: DisplayData): void;
            public getDisplayData(displayName: string): DisplayData;
        }
        class BoneData {
            public name: string;
            public parent: string;
            public length: number;
            public global: DBTransform;
            public transform: DBTransform;
            public scaleMode: number;
            public fixedRotation: boolean;
            constructor();
            public dispose(): void;
        }
        class SkinData {
            public name: string;
            private _slotDataList;
            public getSlotDataList(): SlotData[];
            constructor();
            public dispose(): void;
            public getSlotData(slotName: string): SlotData;
            public addSlotData(slotData: SlotData): void;
        }
        class ArmatureData {
            public name: string;
            private _boneDataList;
            public getBoneDataList(): BoneData[];
            private _skinDataList;
            public getSkinDataList(): SkinData[];
            private _animationDataList;
            public getAnimationDataList(): AnimationData[];
            constructor();
            public dispose(): void;
            public getBoneData(boneName: string): BoneData;
            public getSkinData(skinName: string): SkinData;
            public getAnimationData(animationName: string): AnimationData;
            public addBoneData(boneData: BoneData): void;
            public addSkinData(skinData: SkinData): void;
            public addAnimationData(animationData: AnimationData): void;
            public sortBoneDataList(): void;
            private sortBoneData(object1, object2);
        }
        class SkeletonData {
            public name: string;
            private _subTexturePivots;
            public getArmatureNames(): string[];
            private _armatureDataList;
            public getArmatureDataList(): ArmatureData[];
            constructor();
            public dispose(): void;
            public getArmatureData(armatureName: string): ArmatureData;
            public addArmatureData(armatureData: ArmatureData): void;
            public removeArmatureData(armatureData: ArmatureData): void;
            public removeArmatureDataByName(armatureName: string): void;
            public getSubTexturePivot(subTextureName: string): geom.Point;
            public addSubTexturePivot(x: number, y: number, subTextureName: string): geom.Point;
            public removeSubTexturePivot(subTextureName: string): void;
        }
        class DataParser {
            static parseTextureAtlasData(rawData: any, scale?: number): any;
            static parseSkeletonData(rawData: any): SkeletonData;
            private static parseArmatureData(armatureObject, data, frameRate);
            private static parseBoneData(boneObject);
            private static parseSkinData(skinObject, data);
            private static parseSlotData(slotObject, data);
            private static parseDisplayData(displayObject, data);
            private static parseAnimationData(animationObject, armatureData, frameRate);
            private static parseTimeline(timelineObject, timeline, frameParser, frameRate);
            private static parseTransformTimeline(timelineObject, duration, frameRate);
            private static parseFrame(frameObject, frame, frameRate);
            private static parseMainFrame(frameObject, frameRate);
            private static parseTransformFrame(frameObject, frameRate);
            private static parseTransform(transformObject, transform, pivot?);
        }
    }
    module display {
        interface IDisplayBridge {
            getVisible(): boolean;
            setVisible(value: boolean): void;
            getDisplay(): any;
            setDisplay(value: any): void;
            dispose(): void;
            updateTransform(matrix: geom.Matrix, transform: objects.DBTransform): void;
            updateColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number): void;
            addDisplay(container: any, index: number): void;
            removeDisplay(): void;
            updateBlendMode(blendMode: string): void;
        }
    }
    module textures {
        interface ITextureAtlas {
            name: string;
            dispose(): void;
            getRegion(subTextureName: string): geom.Rectangle;
        }
    }
    module factorys {
        class BaseFactory extends events.EventDispatcher {
            /** @private */
            public _dataDic: any;
            /** @private */
            public _textureAtlasDic: any;
            /** @private */
            public _textureAtlasLoadingDic: any;
            /** @private */
            public _currentDataName: string;
            /** @private */
            public _currentTextureAtlasName: string;
            constructor();
            public getSkeletonData(name: string): objects.SkeletonData;
            public addSkeletonData(data: objects.SkeletonData, name?: string): void;
            public removeSkeletonData(name: string): void;
            public getTextureAtlas(name: string): any;
            public addTextureAtlas(textureAtlas: textures.ITextureAtlas, name?: string): void;
            public removeTextureAtlas(name: string): void;
            public dispose(disposeData?: boolean): void;
            public buildArmature(armatureName: string, animationName?: string, skeletonName?: string, textureAtlasName?: string, skinName?: string): Armature;
            public getTextureDisplay(textureName: string, textureAtlasName: string, pivotX: number, pivotY: number): Object;
            /** @private */
            public _generateArmature(): Armature;
            /** @private */
            public _generateSlot(): Slot;
            /** @private */
            public _generateDisplay(textureAtlas: textures.ITextureAtlas, fullName: string, pivotX: number, pivotY: number): any;
        }
    }
    module utils {
        class ConstValues {
            static ANGLE_TO_RADIAN: number;
            static DRAGON_BONES: string;
            static ARMATURE: string;
            static SKIN: string;
            static BONE: string;
            static SLOT: string;
            static DISPLAY: string;
            static ANIMATION: string;
            static TIMELINE: string;
            static FRAME: string;
            static TRANSFORM: string;
            static COLOR_TRANSFORM: string;
            static TEXTURE_ATLAS: string;
            static SUB_TEXTURE: string;
            static A_VERSION: string;
            static A_IMAGE_PATH: string;
            static A_FRAME_RATE: string;
            static A_NAME: string;
            static A_PARENT: string;
            static A_LENGTH: string;
            static A_TYPE: string;
            static A_FADE_IN_TIME: string;
            static A_DURATION: string;
            static A_SCALE: string;
            static A_OFFSET: string;
            static A_LOOP: string;
            static A_EVENT: string;
            static A_SOUND: string;
            static A_ACTION: string;
            static A_HIDE: string;
            static A_TWEEN_EASING: string;
            static A_TWEEN_ROTATE: string;
            static A_DISPLAY_INDEX: string;
            static A_Z_ORDER: string;
            static A_BLENDMODE: string;
            static A_WIDTH: string;
            static A_HEIGHT: string;
            static A_SCALE_MODE: string;
            static A_FIXED_ROTATION: string;
            static A_X: string;
            static A_Y: string;
            static A_SKEW_X: string;
            static A_SKEW_Y: string;
            static A_SCALE_X: string;
            static A_SCALE_Y: string;
            static A_PIVOT_X: string;
            static A_PIVOT_Y: string;
            static A_ALPHA_OFFSET: string;
            static A_RED_OFFSET: string;
            static A_GREEN_OFFSET: string;
            static A_BLUE_OFFSET: string;
            static A_ALPHA_MULTIPLIER: string;
            static A_RED_MULTIPLIER: string;
            static A_GREEN_MULTIPLIER: string;
            static A_BLUE_MULTIPLIER: string;
        }
        class TransformUtil {
            private static DOUBLE_PI;
            private static _helpMatrix;
            static transformPointWithParent(transform: objects.DBTransform, parent: objects.DBTransform): void;
            static transformToMatrix(transform: objects.DBTransform, matrix: geom.Matrix): void;
            static formatRadian(radian: number): number;
        }
        class DBDataUtil {
            private static _helpTransform1;
            private static _helpTransform2;
            static transformArmatureData(armatureData: objects.ArmatureData): void;
            static transformArmatureDataAnimations(armatureData: objects.ArmatureData): void;
            static transformAnimationData(animationData: objects.AnimationData, armatureData: objects.ArmatureData): void;
            static getTimelineTransform(timeline: objects.TransformTimeline, position: number, retult: objects.DBTransform): void;
            static addHideTimeline(animationData: objects.AnimationData, armatureData: objects.ArmatureData): void;
        }
    }
    /** @private */
    class DBObject {
        public name: string;
        public fixedRotation: boolean;
        public global: objects.DBTransform;
        public origin: objects.DBTransform;
        public offset: objects.DBTransform;
        public tween: objects.DBTransform;
        public parent: Bone;
        public armature: Armature;
        /** @private */
        public _globalTransformMatrix: geom.Matrix;
        /** @private */
        public _isDisplayOnStage: boolean;
        /** @private */
        public _scaleType: number;
        /** @private */
        public _isColorChanged: boolean;
        /** @private */
        public _visible: boolean;
        public getVisible(): boolean;
        public setVisible(value: boolean): void;
        /** @private */
        public _setParent(value: Bone): void;
        /** @private */
        public _setArmature(value: Armature): void;
        constructor();
        public dispose(): void;
        /** @private */
        public _update(): void;
    }
    class Slot extends DBObject {
        /** @private */
        public _dislayDataList: objects.DisplayData[];
        /** @private */
        public _displayBridge: display.IDisplayBridge;
        /** @private */
        public _isDisplayOnStage: boolean;
        /** @private */
        public _originZOrder: number;
        /** @private */
        public _tweenZorder: number;
        private _isHideDisplay;
        private _offsetZOrder;
        private _displayIndex;
        public _blendMode: string;
        public getZOrder(): number;
        public setZOrder(value: number): void;
        public getDisplay(): any;
        public setDisplay(value: any): void;
        public getBlendMode(): string;
        public setBlendMode(value: string): void;
        public getChildArmature(): Armature;
        public setChildArmature(value: Armature): void;
        /** @private */
        public _displayList: any[];
        public getDisplayList(): any[];
        public setDisplayList(value: any[]): void;
        private _setDisplay(display);
        /** @private */
        public _changeDisplay(displayIndex: number): void;
        public setVisible(value: boolean): void;
        /** @private */
        public _setArmature(value: Armature): void;
        constructor(displayBrideg: display.IDisplayBridge);
        public dispose(): void;
        /** @private */
        public _update(): void;
        /** @private */
        public _updateVisible(value: boolean): void;
        private updateChildArmatureAnimation();
    }
    class Bone extends DBObject {
        private static _soundManager;
        public scaleMode: number;
        public displayController: string;
        public slot: Slot;
        /** @private */
        public _tweenPivot: geom.Point;
        private _children;
        public setVisible(value: boolean): void;
        /** @private */
        public _setArmature(value: Armature): void;
        constructor();
        public dispose(): void;
        public contains(child: DBObject): boolean;
        public addChild(child: DBObject): void;
        public removeChild(child: DBObject): void;
        public getSlots(): Slot[];
        /** @private */
        public _arriveAtFrame(frame: objects.Frame, timelineState: animation.TimelineState, animationState: animation.AnimationState, isCross: boolean): void;
        /** @private */
        public _updateColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number, isColorChanged: boolean): void;
    }
    class Armature extends events.EventDispatcher implements animation.IAnimatable {
        private static _soundManager;
        public name: string;
        public animation: animation.Animation;
        /** @private */
        public _slotsZOrderChanged: boolean;
        /** @private */
        public _slotList: Slot[];
        /** @private */
        public _boneList: Bone[];
        /** @private */
        public _eventList: events.Event[];
        private _display;
        public getDisplay(): any;
        constructor(display: any);
        public dispose(): void;
        public advanceTime(passedTime: number): void;
        public getSlots(returnCopy?: boolean): Slot[];
        public getBones(returnCopy?: boolean): Bone[];
        public getSlot(slotName: string): Slot;
        public getSlotByDisplay(display: Object): Slot;
        public removeSlot(slot: Slot): void;
        public removeSlotByName(slotName: string): void;
        public getBone(boneName: string): Bone;
        public getBoneByDisplay(display: Object): Bone;
        public removeBone(bone: Bone): void;
        public removeBoneByName(boneName: string): void;
        public addChild(object: DBObject, parentName: string): void;
        public updateSlotsZOrder(): void;
        /** @private */
        public _addDBObject(object: DBObject): void;
        /** @private */
        public _removeDBObject(object: DBObject): void;
        /** @private */
        public _sortBoneList(): void;
        /** @private */
        public _arriveAtFrame(frame: objects.Frame, timelineState: animation.TimelineState, animationState: animation.AnimationState, isCross: boolean): void;
        private sortSlot(slot1, slot2);
        private sortBone(object1, object2);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module dragonBones {
    module display {
        class DragonBonesEgretBridge implements IDisplayBridge {
            private static RADIAN_TO_ANGLE;
            private _display;
            public getVisible(): boolean;
            public setVisible(value: boolean): void;
            public getDisplay(): any;
            public setDisplay(value: any): void;
            constructor();
            public dispose(): void;
            public updateTransform(matrix: geom.Matrix, transform: objects.DBTransform): void;
            public updateColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number): void;
            public updateBlendMode(blendMode: string): void;
            public addDisplay(container: any, index: number): void;
            public removeDisplay(): void;
        }
    }
    module textures {
        class EgretTextureAtlas implements ITextureAtlas {
            public texture: egret.Texture;
            private textureAtlasRawData;
            public name: string;
            public scale: number;
            public spriteSheet: egret.SpriteSheet;
            private _textureData;
            constructor(texture: egret.Texture, textureAtlasRawData: any, scale?: number);
            public getTexture(fullName: string): egret.Texture;
            public dispose(): void;
            public getRegion(subTextureName: string): geom.Rectangle;
            private parseData(textureAtlasRawData);
        }
    }
    module factorys {
        class EgretFactory extends BaseFactory {
            constructor();
            /** @private */
            public _generateArmature(): Armature;
            /** @private */
            public _generateSlot(): Slot;
            /** @private */
            public _generateDisplay(textureAtlas: textures.EgretTextureAtlas, fullName: string, pivotX: number, pivotY: number): any;
        }
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class NumberUtils {
        static isNumber(value: any): Boolean;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    /**
    * @class RES.ResourceEvent
    * @classdesc
    * @extends egret.Event
    */
    class ResourceEvent extends egret.Event {
        /**
        * 一个加载项加载失败事件。
        * @constant {string} RES.ResourceEvent.ITEM_LOAD_ERROR
        */
        static ITEM_LOAD_ERROR: string;
        /**
        * 配置文件加载并解析完成事件
        * @constant {string} RES.ResourceEvent.CONFIG_COMPLETE
        */ 
        static CONFIG_COMPLETE: string;
        /**
        * 延迟加载组资源加载进度事件
        * @constant {string} RES.ResourceEvent.GROUP_PROGRESS
        */ 
        static GROUP_PROGRESS: string;
        /**
        * 延迟加载组资源加载完成事件
        * @constant {string} RES.ResourceEvent.GROUP_COMPLETE
        */ 
        static GROUP_COMPLETE: string;
        /**
        * 构造函数
        * @method RES.ResourceEvent#constructor
        * @param type {string}
        * @param bubbles {boolean}
        * @param cancelable {boolean}
        */ 
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
        * 已经加载的文件数
        * @member {number} RES.ResourceEvent#itemsLoaded
        */
        public itemsLoaded: number;
        /**
        * 要加载的总文件数
        * @member {number} RES.ResourceEvent#itemsTotal
        */
        public itemsTotal: number;
        /**
        * 资源组名
        * @member {string} RES.ResourceEvent#groupName
        */ 
        public groupName: string;
        /**
        * 一次加载项加载结束的项信息对象
        * @member {egret.ResourceItem} RES.ResourceEvent#resItem
        */ 
        public resItem: ResourceItem;
        /**
        * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
        * @method RES.ResourceEvent.dispatchResourceEvent
        * @param target {egret.IEventDispatcher}
        * @param type {string}
        * @param groupName {string}
        * @param resItem {egret.ResourceItem}
        * @param itemsLoaded {number}
        * @param itemsTotal {number}
        */
        static dispatchResourceEvent(target: egret.IEventDispatcher, type: string, groupName?: string, resItem?: ResourceItem, itemsLoaded?: number, itemsTotal?: number): void;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    /**
    * @class RES.ResourceItem
    * @classdesc
    */
    class ResourceItem {
        /**
        * XML文件
        * @constant {string} RES.ResourceItem.TYPE_XML
        */ 
        static TYPE_XML: string;
        /**
        * 图片文件
        * @constant {string} RES.ResourceItem.TYPE_IMAGE
        */ 
        static TYPE_IMAGE: string;
        /**
        * 二进制流文件
        * @constant {string} RES.ResourceItem.TYPE_BIN
        */ 
        static TYPE_BIN: string;
        /**
        * 文本文件(解析为字符串)
        * @constant {string} RES.ResourceItem.TYPE_TEXT
        */ 
        static TYPE_TEXT: string;
        /**
        * JSON文件
        * @constant {string} RES.ResourceItem.TYPE_JSON
        */
        static TYPE_JSON: string;
        /**
        * SpriteSheet文件
        * @constant {string} RES.ResourceItem.TYPE_SHEET
        */
        static TYPE_SHEET: string;
        /**
        * BitmapTextSpriteSheet文件
        * @constant {string} RES.ResourceItem.TYPE_FONT
        */
        static TYPE_FONT: string;
        /**
        * 声音文件
        * @constant {string} RES.ResourceItem.TYPE_SOUND
        */
        static TYPE_SOUND: string;
        /**
        * 构造函数
        * @method RES.ResourceItem#constructor
        * @param name {string} 加载项名称
        * @param url {string} 要加载的文件地址
        * @param type {string} 加载项文件类型
        */
        constructor(name: string, url: string, type: string);
        /**
        * 加载项名称
        * @member {string} RES.ResourceItem#name
        */
        public name: string;
        /**
        * 要加载的文件地址
        * @member {string} RES.ResourceItem#url
        */
        public url: string;
        /**
        * 加载项文件类型
        * @member {string} RES.ResourceItem#type
        */
        public type: string;
        /**
        * 所属组名
        * @member {string} RES.ResourceItem#groupName
        */
        public groupName: string;
        /**
        * 被引用的原始数据对象
        * @member {any} RES.ResourceItem#data
        */ 
        public data: any;
        private _loaded;
        /**
        * 加载完成的标志
        * @member {boolean} RES.ResourceItem#loaded
        */
        public loaded : boolean;
        /**
        * @method RES.ResourceItem#toString
        * @returns {string}
        */
        public toString(): string;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    /**
    * @class RES.ResourceConfig
    * @classdesc
    */
    class ResourceConfig {
        constructor();
        /**
        * 根据组名获取组加载项列表
        * @method RES.ResourceConfig#getGroupByName
        * @param name {string} 组名
        * @returns {Array<egret.ResourceItem>}
        */
        public getGroupByName(name: string): ResourceItem[];
        /**
        * 根据组名获取原始的组加载项列表
        * @method RES.ResourceConfig#getRawGroupByName
        * @param name {string} 组名
        * @returns {Array<any>}
        */
        public getRawGroupByName(name: string): any[];
        /**
        * 创建自定义的加载资源组,注意：此方法仅在资源配置文件加载完成后执行才有效。
        * 可以监听ResourceEvent.CONFIG_COMPLETE事件来确认配置加载完成。
        * @method RES.ResourceConfig#createGroup
        * @param name {string} 要创建的加载资源组的组名
        * @param keys {egret.Array<string>} 要包含的键名列表，key对应配置文件里的name属性或一个资源组名。
        * @param override {boolean} 是否覆盖已经存在的同名资源组,默认false。
        * @returns {boolean}
        */
        public createGroup(name: string, keys: string[], override?: boolean): boolean;
        /**
        * 一级键名字典
        */
        private keyMap;
        /**
        * 加载组字典
        */
        private groupDic;
        /**
        * 解析一个配置文件
        * @method RES.ResourceConfig#parseConfig
        * @param data {any} 配置文件数据
        * @param folder {string} 加载项的路径前缀。
        */
        public parseConfig(data: any, folder: string): void;
        /**
        * 获取加载项类型。
        * @method RES.ResourceConfig#getType
        * @param name {string} 对应配置文件里的name属性。
        * @returns {string}
        */
        public getType(name: string): string;
        public getRawResourceItem(name: string): any;
        /**
        * 获取加载项信息对象
        * @method RES.ResourceConfig#getResourceItem
        * @param name {string} 对应配置文件里的name属性。
        * @returns {egret.ResourceItem}
        */
        public getResourceItem(name: string): ResourceItem;
        /**
        * 转换Object数据为ResourceItem对象
        */
        private parseResourceItem(data);
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    /**
    * @class RES.ResourceLoader
    * @classdesc
    * @extends egret.EventDispatcher
    */
    class ResourceLoader extends egret.EventDispatcher {
        /**
        * 构造函数
        * @method RES.ResourceLoader#constructor
        */
        constructor();
        /**
        * 一项加载结束回调函数。无论加载成功或者出错都将执行回调函数。示例：callBack(resItem:ResourceItem):void;
        * @member {Function} RES.ResourceLoader#callBack
        */
        public callBack: Function;
        /**
        * RES单例的引用
        * @member {any} RES.ResourceLoader#resInstance
        */
        public resInstance: any;
        /**
        * 当前组加载的项总个数,key为groupName
        */ 
        private groupTotalDic;
        /**
        * 已经加载的项个数,key为groupName
        */ 
        private numLoadedDic;
        /**
        * 正在加载的组列表,key为groupName
        */ 
        private itemListDic;
        /**
        * 优先级队列,key为priority，value为groupName列表
        */ 
        private priorityQueue;
        /**
        * 检查指定的组是否正在加载中
        * @method RES.ResourceLoader#isGroupInLoading
        * @param groupName {string}
        * @returns {boolean}
        */ 
        public isGroupInLoading(groupName: string): boolean;
        /**
        * 开始加载一组文件
        * @method RES.ResourceLoader#loadGroup
        * @param list {egret.Array<ResourceItem>} 加载项列表
        * @param groupName {string} 组名
        * @param priority {number} 加载优先级
        */ 
        public loadGroup(list: ResourceItem[], groupName: string, priority?: number): void;
        /**
        * 延迟加载队列
        */ 
        private lazyLoadList;
        /**
        * 加载一个文件
        * @method RES.ResourceLoader#loadItem
        * @param resItem {egret.ResourceItem} 要加载的项
        */ 
        public loadItem(resItem: ResourceItem): void;
        /**
        * 资源解析库字典类
        */ 
        private analyzerDic;
        /**
        * 加载下一项
        */ 
        private next();
        /**
        * 当前应该加载同优先级队列的第几列
        */ 
        private queueIndex;
        /**
        * 获取下一个待加载项
        */ 
        private getOneResourceItem();
        /**
        * 加载结束
        */ 
        private onItemComplete(resItem);
        /**
        * 从优先级队列中移除指定的组名
        */ 
        private removeGroupName(groupName);
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    class AnalyzerBase extends egret.HashObject {
        constructor();
        /**
        * 加载一个资源文件
        * @param resItem 加载项信息
        * @param compFunc 加载完成回调函数,示例:compFunc(resItem:ResourceItem):void;
        * @param thisObject 加载完成回调函数的this引用
        */
        public loadFile(resItem: ResourceItem, compFunc: Function, thisObject: any): void;
        /**
        * 同步方式获取解析完成的数据
        * @param name 对应配置文件里的name属性。
        */
        public getRes(name: string): any;
        /**
        * 销毁某个资源文件的二进制数据,返回是否删除成功。
        * @param name 配置文件中加载项的name属性
        */
        public destroyRes(name: string): boolean;
        /**
        * 读取一个字符串里第一个点之前的内容。
        * @param name {string} 要读取的字符串
        */
        static getStringPrefix(name: string): string;
        /**
        * 读取一个字符串里第一个点之后的内容。
        * @param name {string} 要读取的字符串
        */
        static getStringTail(name: string): string;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    class BinAnalyzer extends AnalyzerBase {
        /**
        * 构造函数
        */ 
        constructor();
        /**
        * 字节流数据缓存字典
        */ 
        public fileDic: any;
        /**
        * 加载项字典
        */ 
        public resItemDic: any[];
        /**
        * @inheritDoc
        */
        public loadFile(resItem: ResourceItem, compFunc: Function, thisObject: any): void;
        public _dataFormat: string;
        /**
        * URLLoader对象池
        */ 
        public recycler: egret.Recycler;
        /**
        * 获取一个URLLoader对象
        */ 
        private getLoader();
        /**
        * 一项加载结束
        */ 
        public onLoadFinish(event: egret.Event): void;
        /**
        * 解析并缓存加载成功的数据
        */
        public analyzeData(resItem: ResourceItem, data: any): void;
        /**
        * @inheritDoc
        */
        public getRes(name: string): any;
        /**
        * @inheritDoc
        */
        public hasRes(name: string): boolean;
        /**
        * @inheritDoc
        */
        public destroyRes(name: string): boolean;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    class ImageAnalyzer extends BinAnalyzer {
        constructor();
        /**
        * 解析并缓存加载成功的数据
        */
        public analyzeData(resItem: ResourceItem, data: any): void;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    class JsonAnalyzer extends BinAnalyzer {
        constructor();
        /**
        * 解析并缓存加载成功的数据
        */
        public analyzeData(resItem: ResourceItem, data: any): void;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    class TextAnalyzer extends BinAnalyzer {
        constructor();
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    /**
    * SpriteSheet解析器
    */
    class SheetAnalyzer extends BinAnalyzer {
        constructor();
        /**
        * @inheritDoc
        */
        public getRes(name: string): any;
        /**
        * 一项加载结束
        */
        public onLoadFinish(event: egret.Event): void;
        public sheetMap: any;
        /**
        * 解析并缓存加载成功的数据
        */
        public analyzeData(resItem: ResourceItem, data: any): void;
        private getRelativePath(url, file);
        public parseSpriteSheet(texture: egret.Texture, data: any): egret.SpriteSheet;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module RES {
    class FontAnalyzer extends SheetAnalyzer {
        constructor();
        /**
        * 解析并缓存加载成功的数据
        */
        public analyzeData(resItem: ResourceItem, data: any): void;
        private getTexturePath(url, fntText);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module RES {
    class SoundAnalyzer extends BinAnalyzer {
        constructor();
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    class XMLAnalyzer extends BinAnalyzer {
        constructor();
        /**
        * 解析并缓存加载成功的数据
        */
        public analyzeData(resItem: ResourceItem, data: any): void;
    }
}
/**
* Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
* to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom
* the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
declare module RES {
    /**
    * 加载配置文件并解析
    * @method RES.loadConfig
    * @param url {string} 配置文件路径(resource.json的路径)
    * @param resourceRoot {string} 资源根路径。配置中的所有url都是这个路径的相对值。最终url是这个字符串与配置里资源项的url相加的值。
    */
    function loadConfig(url: string, resourceRoot?: string): void;
    /**
    * 根据组名加载一组资源
    * @method RES.loadGroup
    * @param name {string} 要加载资源组的组名
    * @param priority {number} 加载优先级,可以为负数,默认值为0。
    * 低优先级的组必须等待高优先级组完全加载结束才能开始，同一优先级的组会同时加载。
    */
    function loadGroup(name: string, priority?: number): void;
    /**
    * 检查某个资源组是否已经加载完成
    * @method RES.isGroupLoaded
    * @param name {string} 组名
    * @returns {boolean}
    */
    function isGroupLoaded(name: string): boolean;
    /**
    * 根据组名获取组加载项列表
    * @method RES.getGroupByName
    * @param name {string} 组名
    * @returns {egret.ResourceItem}
    */
    function getGroupByName(name: string): ResourceItem[];
    /**
    * 创建自定义的加载资源组,注意：此方法仅在资源配置文件加载完成后执行才有效。
    * 可以监听ResourceEvent.CONFIG_COMPLETE事件来确认配置加载完成。
    * @method RES.createGroup
    * @param name {string} 要创建的加载资源组的组名
    * @param keys {egret.Array<string>} 要包含的键名列表，key对应配置文件里的name属性或一个资源组名。
    * @param override {boolean} 是否覆盖已经存在的同名资源组,默认false。
    * @returns {boolean}
    */
    function createGroup(name: string, keys: string[], override?: boolean): boolean;
    /**
    * 检查配置文件里是否含有指定的资源
    * @method RES.hasRes
    * @param name {string} 对应配置文件里的name属性。
    * @returns {boolean}
    */
    function hasRes(name: string): boolean;
    /**
    * 同步方式获取缓存的已经加载成功的资源。<br/>
    * @method RES.getRes
    * @param name {string} 对应配置文件里的name属性。
    * @returns {any}
    */
    function getRes(name: string): any;
    /**
    * 异步方式获取配置里的资源。只要是配置文件里存在的资源，都可以通过异步方式获取。
    * @method RES.getResAsync
    * @param name {string} 对应配置文件里的name属性。
    * @param compFunc {Function} 回调函数。示例：compFunc(data):void,若设置了other参数则为:compFunc(data,other):void。
    * @param thisObject {any} 回调函数的this引用
    */
    function getResAsync(name: string, compFunc: Function, thisObject: any): void;
    /**
    * 通过完整URL方式获取外部资源。
    * @method RES.getResByUrl
    * @param url {string} 要加载文件的外部路径。
    * @param compFunc {Function} 回调函数。示例：compFunc(data):void,若设置了other参数则为:compFunc(data,other):void。
    * @param thisObject {any} 回调函数的this引用
    * @param type {string} 文件类型(可选)。请使用ResourceItem类中定义的静态常量。若不设置将根据文件扩展名生成。
    */
    function getResByUrl(url: string, compFunc: Function, thisObject: any, type?: string): void;
    /**
    * 销毁单个资源文件或一组资源的缓存数据,返回是否删除成功。
    * @method RES.destroyRes
    * @param name {string} 配置文件中加载项的name属性或资源组名
    * @returns {boolean}
    */
    function destroyRes(name: string): boolean;
    /**
    * 添加事件侦听器,参考ResourceEvent定义的常量。
    * @method RES.addEventListener
    * @param type {string} 事件的类型。
    * @param listener {Function} 处理事件的侦听器函数。此函数必须接受 Event 对象作为其唯一的参数，并且不能返回任何结果，
    * 如下面的示例所示： function(evt:Event):void 函数可以有任何名称。
    * @param thisObject {any} 侦听函数绑定的this对象
    * @param useCapture {boolean} 确定侦听器是运行于捕获阶段还是运行于目标和冒泡阶段。如果将 useCapture 设置为 true，
    * 则侦听器只在捕获阶段处理事件，而不在目标或冒泡阶段处理事件。如果 useCapture 为 false，则侦听器只在目标或冒泡阶段处理事件。
    * 要在所有三个阶段都侦听事件，请调用 addEventListener 两次：一次将 useCapture 设置为 true，一次将 useCapture 设置为 false。
    * @param priority {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
    * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
    */
    function addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
    /**
    * 移除事件侦听器,参考ResourceEvent定义的常量。
    * @method RES.removeEventListener
    * @param type {string} 事件名
    * @param listener {Function} 侦听函数
    * @param thisObject {any} 侦听函数绑定的this对象
    * @param useCapture {boolean} 是否使用捕获，这个属性只在显示列表中生效。
    */
    function removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.HTML5DeviceContext
    * @classdesc
    * @extends egret.DeviceContext
    */
    class HTML5DeviceContext extends DeviceContext {
        public frameRate: number;
        private _time;
        private static instance;
        /**
        * @method egret.HTML5DeviceContext#constructor
        */
        constructor(frameRate?: number);
        static requestAnimationFrame: Function;
        static cancelAnimationFrame: Function;
        static _thisObject: any;
        static _callback: Function;
        private _requestAnimationId;
        private enterFrame();
        /**
        * @method egret.HTML5DeviceContext#executeMainLoop
        * @param callback {Function}
        * @param thisObject {any}
        */
        public executeMainLoop(callback: Function, thisObject: any): void;
        private reset();
        private registerListener();
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.HTML5CanvasRenderer
    * @classdesc
    * @extends egret.RendererContext
    */
    class HTML5CanvasRenderer extends RendererContext {
        private canvas;
        /**
        * @member egret.HTML5CanvasRenderer#canvasContext
        */
        public canvasContext: any;
        private _matrixA;
        private _matrixB;
        private _matrixC;
        private _matrixD;
        private _matrixTx;
        private _matrixTy;
        public _transformTx: number;
        public _transformTy: number;
        private blendValue;
        constructor(canvas: any);
        public clearScreen(): void;
        public clearRect(x: number, y: number, w: number, h: number): void;
        public drawImage(texture: Texture, sourceX: any, sourceY: any, sourceWidth: any, sourceHeight: any, destX: any, destY: any, destWidth: any, destHeight: any): void;
        public setTransform(matrix: Matrix): void;
        public setAlpha(alpha: number, blendMode: string): void;
        public setupFont(textField: TextField): void;
        public measureText(text: string): number;
        public drawText(textField: TextField, text: string, x: number, y: number, maxWidth: number): void;
        public strokeRect(x: any, y: any, w: any, h: any, color: any): void;
        public pushMask(mask: Rectangle): void;
        public popMask(): void;
    }
}
declare module egret_h5_graphics {
    function beginFill(color: number, alpha?: number): void;
    function drawRect(x: number, y: number, width: number, height: number): void;
    function drawCircle(x: number, y: number, r: number): void;
    function lineStyle(thickness?: number, color?: number, alpha?: number, pixelHinting?: boolean, scaleMode?: string, caps?: string, joints?: string, miterLimit?: number): void;
    function lineTo(x: number, y: number): void;
    function curveTo(controlX: Number, controlY: Number, anchorX: Number, anchorY: Number): void;
    function moveTo(x: number, y: number): void;
    function clear(): void;
    function createEndFillCommand(): void;
    function endFill(): void;
    function _fill(): void;
    function createEndLineCommand(): void;
    function _draw(renderContext: egret.RendererContext): void;
    function _setStyle(colorStr: string): void;
    function init(): void;
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.WebGLRenderer
    * @classdesc
    * @extends egret.RendererContext
    */
    class WebGLRenderer extends RendererContext {
        static blendModesWebGL: {};
        private canvas;
        private gl;
        private size;
        private vertices;
        private vertSize;
        private indices;
        private projectionX;
        private projectionY;
        private shaderManager;
        constructor(canvas: any);
        private contextLost;
        private handleContextLost();
        private handleContextRestored();
        private initWebGL();
        private glContextId;
        private vertexBuffer;
        private indexBuffer;
        private setContext(gl);
        private initBlendMode();
        private start();
        public clearScreen(): void;
        private currentBlendMode;
        private setBlendMode(blendMode);
        private currentBaseTexture;
        private currentBatchSize;
        public drawImage(texture: Texture, sourceX: any, sourceY: any, sourceWidth: any, sourceHeight: any, destX: any, destY: any, destWidth: any, destHeight: any): void;
        private _draw();
        private worldTransform;
        public setTransform(matrix: Matrix): void;
        private worldAlpha;
        public setAlpha(value: number, blendMode: string): void;
        public createWebGLTexture(texture: Texture): void;
        private maskList;
        private maskDataFreeList;
        public pushMask(mask: Rectangle): void;
        public popMask(): void;
        private canvasContext;
        public setupFont(textField: TextField): void;
        public measureText(text: string): number;
        private graphicsPoints;
        private graphicsIndices;
        private graphicsBuffer;
        private graphicsIndexBuffer;
        private renderGraphics(graphics);
        private updateGraphics(graphics);
        private buildRectangle(graphicsData);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class WebGLUtils {
        static compileProgram(gl: any, vertexSrc: any, fragmentSrc: any): any;
        static compileFragmentShader(gl: any, shaderSrc: any): any;
        static compileVertexShader(gl: any, shaderSrc: any): any;
        private static _compileShader(gl, shaderSrc, shaderType);
        private static canUseWebGL;
        static checkCanUseWebGL(): boolean;
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class WebGLShaderManager {
        private gl;
        private maxAttibs;
        private attribState;
        private tempAttribState;
        constructor(gl: any);
        public defaultShader: EgretShader;
        public primitiveShader: PrimitiveShader;
        public setContext(gl: any): void;
        public activateShader(shader: any): void;
        private setAttribs(attribs);
    }
    class EgretShader {
        private defaultVertexSrc;
        private gl;
        public program: any;
        private fragmentSrc;
        private uSampler;
        public projectionVector: any;
        private offsetVector;
        private dimensions;
        public aVertexPosition: any;
        public aTextureCoord: any;
        public colorAttribute: any;
        public attributes: any[];
        constructor(gl: any);
        private init();
    }
    class PrimitiveShader {
        private gl;
        public program: any;
        public projectionVector: any;
        public offsetVector: any;
        public tintColor: any;
        public aVertexPosition: any;
        public colorAttribute: any;
        public attributes: any[];
        public translationMatrix: any;
        public alpha: any;
        public fragmentSrc: string;
        public vertexSrc: string;
        constructor(gl: any);
        private init();
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @class egret.HTML5NetContext
    * @classdesc
    * @extends egret.NetContext
    */
    class HTML5NetContext extends NetContext {
        constructor();
        public proceed(loader: URLLoader): void;
        private loadSound(loader);
        private getXHR();
        private setResponseType(xhr, responseType);
        private loadTexture(loader);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    class HTML5TouchContext extends TouchContext {
        private canvas;
        private _isTouchDown;
        constructor(canvas: HTMLCanvasElement);
        public run(): void;
        private addMouseListener();
        private addTouchListener();
        private inOutOfCanvas(event);
        private dispatchLeaveStageEvent();
        private _onTouchBegin(event);
        private _onTouchMove(event);
        private _onTouchEnd(event);
        private getLocation(canvas, event);
    }
}
/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
declare module egret {
    /**
    * @deprecated
    */
    class SAXParser extends HashObject {
        static _instance: SAXParser;
        /**
        * @deprecated
        */
        static getInstance(): SAXParser;
        private _parser;
        private _xmlDict;
        private _isSupportDOMParser;
        constructor();
        /**
        * @deprecated
        */
        public parserXML(textxml: string): any;
    }
}
